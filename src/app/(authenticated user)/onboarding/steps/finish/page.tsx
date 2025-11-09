'use client'

import PageUrlEnum from '@/enums/page-url'
import { Button } from '@heroui/button'
import { Card, CardBody, CardHeader } from '@heroui/card'
import { Link } from '@heroui/link'
import { CheckCircle2, Home, ShoppingCart, Package } from 'lucide-react'

export default function Page() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-success-100 p-6 dark:bg-success-900">
            <CheckCircle2 className="text-success" size={64} />
          </div>
        </div>
        <h1 className="mb-2 text-4xl font-bold">Selamat! 🎉</h1>
        <p className="text-xl text-default-600">
          Sensasi POS siap digunakan untuk mengelola bisnis Anda
        </p>
      </div>

      <Card className="border-2 border-success-200 bg-success-50 dark:border-success-800 dark:bg-success-950">
        <CardHeader>
          <h2 className="text-lg font-semibold text-success-800 dark:text-success-200">
            Setup Awal Selesai
          </h2>
        </CardHeader>
        <CardBody className="gap-3">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 shrink-0 text-success" size={20} />
            <div>
              <p className="font-medium">Akun pengelola telah dibuat</p>
              <p className="text-sm text-default-600">
                Anda sudah masuk dan siap mengelola aplikasi
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 shrink-0 text-success" size={20} />
            <div>
              <p className="font-medium">Data produk dan stok siap</p>
              <p className="text-sm text-default-600">
                Anda dapat menambah produk dan stok kapan saja
              </p>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold">Langkah Selanjutnya</h2>
        </CardHeader>
        <CardBody className="gap-3">
          <Button
            as={Link}
            href={PageUrlEnum.SALE_CREATE}
            variant="flat"
            color="primary"
            startContent={<ShoppingCart size={20} />}
            className="h-[unset] justify-start py-3">
            <div className="flex flex-col items-start">
              <span className="font-semibold">Mulai Transaksi Penjualan</span>
              <span className="text-xs text-default-500">
                Catat setiap transaksi penjualan dengan mudah
              </span>
            </div>
          </Button>

          <Button
            as={Link}
            href={PageUrlEnum.PRODUCT_LIST}
            variant="flat"
            color="primary"
            startContent={<Package size={20} />}
            className="h-[unset] justify-start py-3">
            <div className="flex flex-col items-start">
              <span className="font-semibold">Kelola Stok Produk</span>
              <span className="text-xs text-default-500">
                Tambah, edit, atau hapus produk sesuai kebutuhan
              </span>
            </div>
          </Button>

          <Button
            as={Link}
            href={PageUrlEnum.DASHBOARD}
            variant="flat"
            color="primary"
            startContent={<Home size={20} />}
            className="h-[unset] justify-start py-3">
            <div className="flex flex-col items-start">
              <span className="font-semibold">Lihat Dashboard</span>
              <span className="text-xs text-default-500">
                Pantau ringkasan bisnis Anda
              </span>
            </div>
          </Button>
        </CardBody>
      </Card>

      <p className="text-center text-sm text-default-500">
        Anda dapat mengakses pengaturan dan bantuan kapan saja dari menu
        navigasi
      </p>
    </div>
  )
}
