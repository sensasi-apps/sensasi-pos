// types
import type { Product } from '@/models/table-types/product'
// vendors
import dayjs from 'dayjs'
import { useState } from 'react'
// components
import { ConfirmationModal } from '@/components/confirmation-modal'
// models
import db from '@/models/db'
import toast from 'react-hot-toast'

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
            // .delete(productUuid)
            .update(productUuid, { deleted_at: dayjs().toISOString() })
            .then(() => {
              toast.success('Produk berhasil dihapus')
              setIsDeleteModalOpen(false)
            })
            .catch((err: Error) => {
              toast.error('Gagal menghapus produk')
              throw err
            })
        }}>
        <p>Apakah Anda yakin ingin menghapus produk ini?</p>
      </ConfirmationModal>
    ),
  }
}
