import {
  ArrowUpRightIcon,
  ComputerIcon,
  Github,
  TriangleAlertIcon,
} from 'lucide-react'
import { Button, Card, CardBody } from '@nextui-org/react'
import ThemeSwitcher from '@/components/theme-switcher'

export default function Component() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex-1 max-w-md w-full"></div>
      <div className="m-12 flex flex-col gap-6 max-w-md">
        <ComputerIcon className="text-primary" size={96} />

        <h1 className="text-7xl">
          Sensasi <span className="font-bold">POS</span>
        </h1>

        <div>
          <p className="mb-3">
            Aplikasi Point of Sale sederhana yang dirancang untuk membantu
            pencatatan penjualan barang pada Warung / Toko / UMKM / Stan / Gerai
            / Swalayan.
          </p>

          <p>
            Dibangun dengan teknologi web modern, Sensasi POS memiliki beberapa
            fitur unggulan: <strong>Antarmuka Kasir</strong>,{' '}
            <strong>Manajemen Persediaan Produk</strong>,{' '}
            <strong>Laporan Penjualan</strong> dan masih banyak lagi.
          </p>
        </div>

        <WarningCard />

        <div className="flex gap-4">
          <ThemeSwitcher />

          <Button
            variant="light"
            color="primary"
            size="sm"
            href="https://github.com/sensasi-apps/sensasi-pos"
            startContent={<Github />}
            endContent={<ArrowUpRightIcon size={18} className="-ml-2" />}
            as="a">
            GitHub
          </Button>
        </div>
      </div>
    </div>
  )
}

function WarningCard() {
  return (
    <Card
      shadow="none"
      className="border-none bg-warning/25 dark:bg-warning/25">
      <CardBody className="px-5">
        <div className="flex gap-4 items-center">
          <TriangleAlertIcon className="text-warning" />

          <div className="flex-1 text-warning-800 text-center">
            <p>Aplikasi masih dalam tahap pembangunan.</p>

            <p>Silakan kunjungi lagi nanti.</p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
