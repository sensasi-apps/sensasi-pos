'use client'

// types
import type { Product } from '@/models/table-types/product'
// vendors
import { Button } from '@heroui/button'
import { Card, CardBody, type CardProps } from '@heroui/card'
import { Chip } from '@heroui/chip'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@heroui/dropdown'
import { Image } from '@heroui/image'
import { EditIcon, MoreVerticalIcon, TrashIcon } from 'lucide-react'
import Link from 'next/link'
// etc
import formatNumber from '@/functions/format-number'
import PageUrlEnum from '@/enums/page-url'
import { useHook } from './_hook'

export function ProductCard({
  data: { uuid, name, default_price, qty_unit, category, image_file, stocks },
  className,
  as,
}: {
  data: Product
  onClick?: () => void
  as?: CardProps['as']
  className?: CardProps['className']
}) {
  const { handleOpenDeleteModal, deleteConfirmationModal } = useHook(uuid)

  const totalStock = stocks.reduce((acc, { qty }) => acc + qty, 0)
  const cost =
    totalStock === 0
      ? 0
      : stocks.reduce((acc, { qty, cost }) => acc + cost * qty, 0) / totalStock

  return (
    <Card
      as={as}
      className={
        'bg-background/60 light:border-none dark:bg-default-100/50 w-full' +
        (className ? ` ${className}` : '')
      }
      shadow="sm">
      <CardBody>
        <div className="flex items-center gap-6 max-md:items-start">
          {image_file && (
            <Image
              alt="Gambar Produk"
              classNames={{
                img: 'object-cover',
                wrapper: 'flex-none',
              }}
              height={64}
              width={64}
              shadow="md"
              src={image_file}
            />
          )}

          <div className="flex flex-1 items-center">
            <div className="grid w-full grid-cols-6 gap-6 md:grid-cols-12 md:gap-4">
              <div className="col-span-6 border-r-2 max-md:border-none md:col-span-8">
                <h2 className="mb-1 text-lg">{name}</h2>

                <div className="flex items-center gap-2 text-sm font-medium">
                  <Chip size="sm">{category ?? 'Tanpa Kategori'}</Chip>
                  <span>•</span>
                  <span>
                    {formatNumber(totalStock)}
                    {qty_unit}
                  </span>
                </div>
              </div>

              <div className="col-span-3 flex flex-col justify-center md:col-span-2">
                <h3 className="text-sm">HPP</h3>
                <p className="text-xl">{formatNumber(cost)}</p>
              </div>

              <div className="col-span-3 flex flex-col items-center justify-center md:col-span-2">
                <h3 className="text-sm">Harga Jual</h3>
                <p className="text-xl">{formatNumber(default_price)}</p>
              </div>
            </div>
          </div>

          <div className="flex-none">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm">
                  <MoreVerticalIcon />
                </Button>
              </DropdownTrigger>

              <DropdownMenu>
                <DropdownItem
                  key="edit"
                  startContent={<EditIcon className="mr-2" />}
                  href={PageUrlEnum.PRODUCT_EDIT.replace(':uuid', uuid)}
                  as={Link}>
                  Sunting
                </DropdownItem>

                <DropdownItem
                  key="delete"
                  startContent={<TrashIcon className="mr-2" />}
                  color="danger"
                  className="text-danger"
                  onClick={handleOpenDeleteModal}>
                  Hapus
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        {deleteConfirmationModal}
      </CardBody>
    </Card>
  )
}
