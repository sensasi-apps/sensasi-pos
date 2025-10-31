'use client'

import { Suspense, useCallback } from 'react'

// vendors
import { Button } from '@heroui/button'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@heroui/table'
import { Link } from '@heroui/link'
import { EditIcon, Eye, Search, TrashIcon } from 'lucide-react'
import { Pagination } from '@heroui/pagination'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Popover, PopoverTrigger, PopoverContent } from '@heroui/popover'

// global
import PageUrlEnum from '@/enums/page-url'
import mergeClass from '@/functions/merge-class'
import formatNumber from '@/functions/format-number'

// local
import { usePageHook } from './page-hook'
import { ConfirmationModal } from '@/components/confirmation-modal'
import type { ProductMovement } from '@/models/table-types/product-movement'
import { Input } from '@heroui/input'

function PurchaseListPageContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const ref = searchParams.get('ref') || ''
  const rowsPerPage = 5

  const {
    productMovements,
    totalProductMovements,
    toBeDeletedProductMovement,
    setToBeDeletedProductMovement,
    handleDeleteProductMovement,
    search,
    setSearch,
  } = usePageHook({ page, rowsPerPage, ref })

  const pages = Math.ceil((totalProductMovements || 0) / rowsPerPage)

  const onPageChange = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams)
      params.set('page', page.toString())
      router.push(`${pathname}?${params.toString()}`)
    },
    [pathname, router, searchParams],
  )

  const renderCell = (movement: ProductMovement, columnKey: React.Key) => {
    switch (columnKey) {
      case 'ref':
        return <div className="whitespace-nowrap">{movement.ref}</div>
      case 'at':
        return (
          <div className="whitespace-nowrap">
            {new Date(movement.at).toLocaleDateString('id-ID', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        )
      case 'total_items':
        return (
          <div className="whitespace-nowrap">
            {formatNumber(
              movement.items.reduce((acc, item) => acc + item.qty, 0),
            )}
          </div>
        )
      case 'total_cost': {
        const itemsTotal = movement.items.reduce(
          (acc, item) => acc + item.price * item.qty,
          0,
        )
        const costsTotal = movement.additional_costs.reduce(
          (acc, cost) => acc + cost.value,
          0,
        )
        return (
          <div className="whitespace-nowrap">
            {`Rp ${formatNumber(itemsTotal + costsTotal)}`}
          </div>
        )
      }
      case 'note':
        return (
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Button startContent={<Eye size={16} />} size="sm">
                Detail
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="w-full max-w-[428px] px-1 py-2">
                <p className="">{movement.note}</p>
              </div>
            </PopoverContent>
          </Popover>
        )
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Button
              isDisabled={!!movement.deleted_at}
              isIconOnly
              variant="flat"
              color="primary"
              size="sm"
              as={Link}
              href={PageUrlEnum.PURCHASE_EDIT.replace(':uuid', movement.uuid)}>
              <EditIcon />
            </Button>
            <Button
              isDisabled={!!movement.deleted_at}
              isIconOnly
              variant="flat"
              color="danger"
              size="sm"
              tabIndex={-1}
              onClick={() => {
                setToBeDeletedProductMovement(movement)
              }}>
              <TrashIcon />
            </Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      <div className="w-full flex items-center justify-between mb-4">
        <div className="w-[340px]">
          <Input
            isClearable
            classNames={{
              label: 'text-black/50 dark:text-white/90',
              input: [
                'bg-transparent',
                'text-black/90 dark:text-white/90',
                'placeholder:text-default-700/50 dark:placeholder:text-white/60',
              ],
              innerWrapper: 'bg-transparent',
              inputWrapper: [
                'shadow-sm',
                'bg-default-200/50',
                'dark:bg-default/60',
                'backdrop-blur-xl',
                'backdrop-saturate-200',
                'hover:bg-default-200/70',
                'dark:hover:bg-default/70',
                'group-data-[focus=true]:bg-default-200/50',
                'dark:group-data-[focus=true]:bg-default/60',
                'cursor-text!',
              ],
            }}
            placeholder="Ketik untuk mencari..."
            radius="lg"
            startContent={<Search size={20} />}
            value={search}
            onValueChange={setSearch}
          />
        </div>
        <Button as={Link} href={PageUrlEnum.PURCHASE_CREATE} color="primary">
          Masukkan data pembelian
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table aria-label="Tabel Pembelian" className="min-w-full">
          <TableHeader>
            <TableColumn key="ref">Ref</TableColumn>
            <TableColumn key="at">Tanggal</TableColumn>
            <TableColumn key="total_items">Total Item</TableColumn>
            <TableColumn key="total_cost">Total Biaya</TableColumn>
            <TableColumn key="note">Catatan</TableColumn>
            <TableColumn key="actions">Aksi</TableColumn>
          </TableHeader>
          <TableBody
            items={productMovements || []}
            emptyContent={'Tidak ada data pembelian.'}>
            {item => (
              <TableRow
                key={item.uuid}
                className={mergeClass({
                  'text-gray-700 line-through': !!item.deleted_at,
                })}>
                {columnKey => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {pages > 1 ? (
        <div className="flex w-full justify-center mt-4">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={onPageChange}
          />
        </div>
      ) : null}

      <ConfirmationModal
        isOpen={!!toBeDeletedProductMovement}
        onReject={() => {
          setToBeDeletedProductMovement(undefined)
        }}
        onAccept={handleDeleteProductMovement}>
        <p>Apakah Anda yakin ingin menghapus data ini?</p>
        <p>{toBeDeletedProductMovement?.ref}</p>
      </ConfirmationModal>
    </>
  )
}

export default function PurchaseListPage() {
  return (
    <Suspense>
      <PurchaseListPageContent />
    </Suspense>
  )
}
