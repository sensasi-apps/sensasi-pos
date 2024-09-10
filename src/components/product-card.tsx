'use client'

import type Product from '@/models/table-types/product'
import PageUrlEnum from '@/enums/page-url'
import formatNumber from '@/functions/format-number'
import {
  Card,
  CardBody,
  Image,
  CardProps,
  Chip,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react'
import { EditIcon, MoreVerticalIcon, TrashIcon } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import ConfirmationModal from './confirmation-modal'
import db from '@/models/db'
import dayjs from 'dayjs'

export default function ProductCard({
  data: {
    id,
    name,
    base_cost,
    default_price,
    qty_unit,
    qty,
    category,
    image_file,
  },
  className,
  as,
}: {
  data: Product
  onClick?: () => void
  as?: CardProps['as']
  className?: CardProps['className']
}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  return (
    <Card
      as={as}
      className={
        'light:border-none bg-background/60 dark:bg-default-100/50 w-full' +
        (className ? ` ${className}` : '')
      }
      shadow="sm">
      <CardBody>
        <div className="flex gap-6 items-center max-md:items-start">
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
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 w-full">
              <div className="col-span-6 md:col-span-8 border-r-2 max-md:border-none">
                <h2 className="text-lg mb-1">{name}</h2>

                <div className="text-sm font-medium flex gap-2 items-center">
                  <Chip size="sm">{category ?? 'Tanpa Kategori'}</Chip>
                  <span>•</span>
                  <span>
                    {formatNumber(qty)} {qty_unit}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center col-span-3 md:col-span-2">
                <h3 className="text-sm">HPP</h3>
                <p className="text-xl">{formatNumber(base_cost)}</p>
              </div>

              <div className="flex flex-col justify-center items-center col-span-3 md:col-span-2">
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
                  startContent={<EditIcon className="mr-2" />}
                  href={PageUrlEnum.PRODUCT_EDIT.replace(':id', id.toString())}
                  as={Link}>
                  Sunting
                </DropdownItem>

                <DropdownItem
                  startContent={<TrashIcon className="mr-2" />}
                  color="danger"
                  className="text-danger"
                  onClick={() => setIsDeleteModalOpen(true)}>
                  Hapus
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </CardBody>

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onReject={() => setIsDeleteModalOpen(false)}
        onAccept={() =>
          db.products
            .update(Number(id), { deleted_at: dayjs().toISOString() })
            .then(() => setIsDeleteModalOpen(false))
        }>
        <p>Apakah Anda yakin ingin menghapus produk ini?</p>
      </ConfirmationModal>
    </Card>
  )
}
