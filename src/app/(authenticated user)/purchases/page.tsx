'use client'

// vendors
import Link from 'next/link'
import { Button } from '@nextui-org/button'
// global
import PageUrlEnum from '@/enums/page-url'
// local
import { usePageHook } from './page-hook'
import { EditIcon, TrashIcon } from 'lucide-react'
import { ConfirmationModal } from '@/components/confirmation-modal'
import mergeClass from '@/functions/merge-class'

export default function PurchaseListPage() {
  const {
    productMovements,
    toBeDeletedProductMovement,
    setToBeDeletedProductMovement,
    handleDeleteProductMovement,
  } = usePageHook()

  return (
    <>
      <Button
        as={Link}
        href={PageUrlEnum.PURCHASE_CREATE}
        className="mb-4"
        color="primary">
        Masukkan data pembelian
      </Button>

      <ul className="flex flex-col gap-3">
        {productMovements?.map(movement => (
          <li
            key={movement.uuid}
            className={mergeClass('flex items-center gap-3', {
              'text-gray-700 line-through': !!movement.deleted_at,
            })}>
            {movement.uuid}{' '}
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
          </li>
        ))}
      </ul>

      <ConfirmationModal
        isOpen={!!toBeDeletedProductMovement}
        onReject={() => {
          setToBeDeletedProductMovement(undefined)
        }}
        onAccept={handleDeleteProductMovement}>
        <p>Apakah Anda yakin ingin menghapus data ini?</p>
        <p>{toBeDeletedProductMovement?.uuid}</p>
      </ConfirmationModal>
    </>
  )
}
