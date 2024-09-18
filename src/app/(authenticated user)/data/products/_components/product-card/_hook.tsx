// vendors
import dayjs from 'dayjs'
import { useState } from 'react'
// components
import { ConfirmationModal } from '@/components/confirmation-modal'
// models
import db from '@/models/db'

export function useHook(productId: number) {
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
            .update(productId, { deleted_at: dayjs().toISOString() })
            .then(() => {
              setIsDeleteModalOpen(false)
            })
            .catch(err => {
              throw err
            })
        }}>
        <p>Apakah Anda yakin ingin menghapus produk ini?</p>
      </ConfirmationModal>
    ),
  }
}
