// types
import type { Product } from '@/models/table-types/product'
// vendors
import dayjs from 'dayjs'
import { useState } from 'react'
// components
import { ConfirmationModal } from '@/components/confirmation-modal'
import { toast } from '@/functions/toast'
// models
import db from '@/models/db'

export function useHook(productUuid: Product['uuid']) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  return {
    handleOpenDeleteModal: () => {
      setIsDeleteModalOpen(true)
    },

    deleteConfirmationModal: (
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onReject={() => {
          setIsDeleteModalOpen(false)
        }}
        onAccept={() => {
          db.products
            .update(productUuid, { deleted_at: dayjs().toISOString() })
            .then(() => {
              setIsDeleteModalOpen(false)
              toast('Produk berhasil dihapus', 'warning')
            })
            .catch((err: Error) => {
              throw err
            })
        }}>
        <p>Apakah Anda yakin ingin menghapus produk ini?</p>
      </ConfirmationModal>
    ),
  }
}
