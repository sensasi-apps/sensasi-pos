'use client'

import { useState } from 'react'
import { Button } from '@heroui/button'
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card'
import { useRouter } from 'next/navigation'
import { Trash2, AlertTriangle } from 'lucide-react'
import { ConfirmationModal } from '@/components/confirmation-modal'
import { toast } from '@/functions/toast'
import db from '@/models/db'
import useAuth from '@/hooks/use-auth'
import PageUrlEnum from '@/enums/page-url'

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()
  const { setLoggedInUser } = useAuth()

  const handleWipeDatabase = async () => {
    try {
      setIsDeleting(true)

      // Delete all data from all tables
      await db.users.clear()
      await db.products.clear()
      await db.productMovements.clear()

      // Clear local storage (logout user)
      setLoggedInUser(undefined)

      toast('Semua data berhasil dihapus', 'success')

      // Redirect to onboarding
      router.push(PageUrlEnum.ONBOARDING)
    } catch (error) {
      console.error('Error wiping database:', error)
      toast('Gagal menghapus data', 'danger')
      setIsDeleting(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Card>
        <CardHeader className="flex-col items-start gap-2 px-6 pb-0 pt-6">
          <div className="flex items-center gap-2">
            <Trash2 className="text-danger" size={24} />
            <h1 className="text-2xl font-bold">Hapus Semua Data</h1>
          </div>
          <p className="text-sm text-default-500">
            Menghapus seluruh data aplikasi secara permanen
          </p>
        </CardHeader>

        <CardBody className="gap-4 px-6 py-6">
          <div className="rounded-lg border-2 border-danger-200 bg-danger-50 p-4 dark:border-danger-800 dark:bg-danger-950">
            <div className="flex gap-3">
              <AlertTriangle
                className="mt-0.5 shrink-0 text-danger"
                size={20}
              />
              <div className="space-y-2">
                <h3 className="font-semibold text-danger">Peringatan!</h3>
                <p className="text-sm text-danger-700 dark:text-danger-300">
                  Tindakan ini akan <strong>menghapus semua data</strong> yang
                  tersimpan di aplikasi ini, termasuk:
                </p>
                <ul className="ml-4 list-disc space-y-1 text-sm text-danger-700 dark:text-danger-300">
                  <li>Semua data pengguna</li>
                  <li>Semua data produk</li>
                  <li>Semua data transaksi (pembelian & penjualan)</li>
                  <li>Semua pengaturan aplikasi</li>
                </ul>
                <p className="text-sm font-semibold text-danger-700 dark:text-danger-300">
                  Data yang sudah dihapus tidak dapat dikembalikan!
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border-2 border-default-200 bg-default-50 p-4 dark:border-default-800 dark:bg-default-950">
            <h3 className="mb-2 font-semibold">Kapan menggunakan fitur ini?</h3>
            <ul className="ml-4 list-disc space-y-1 text-sm text-default-600 dark:text-default-400">
              <li>Untuk pengujian atau debugging</li>
              <li>Ketika data lokal rusak atau tidak sinkron</li>
              <li>Ingin memulai dari awal dengan data bersih</li>
            </ul>
          </div>
        </CardBody>

        <CardFooter className="justify-between px-6 pb-6">
          <Button
            variant="light"
            color="default"
            onPress={() => router.back()}
            isDisabled={isDeleting}>
            Batal
          </Button>
          <Button
            color="danger"
            variant="solid"
            startContent={<Trash2 size={18} />}
            onPress={() => setIsModalOpen(true)}
            isDisabled={isDeleting}>
            Hapus Semua Data
          </Button>
        </CardFooter>
      </Card>

      <ConfirmationModal
        isOpen={isModalOpen}
        onReject={() => setIsModalOpen(false)}
        onAccept={handleWipeDatabase}
        title="Konfirmasi Penghapusan Data"
        rejectText="Batal"
        acceptText="Ya, Hapus Semua"
        color="danger">
        <p className="text-sm">
          Apakah Anda yakin ingin menghapus semua data? Tindakan ini tidak dapat
          dibatalkan!
        </p>
      </ConfirmationModal>
    </div>
  )
}
