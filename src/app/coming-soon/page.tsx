import { Github, TriangleAlert } from 'lucide-react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-xl gap-6">
        <h1 className="text-7xl font-bold">Sensasi POS</h1>
        <p className="flex flex-row p-4 bg-orange-500 rounded ">
          <TriangleAlert className="mx-2" />
          Aplikasi masih dalam tahap pengembangan
        </p>
        <p>
          Sensasi POS adalah aplikasi Point of Sale (POS) berbasis web yang
          dirancang untuk membantu Anda mengelola transaksi bisnis dengan mudah
          dan efisien.
        </p>
        <Button variant="light" color="primary">
          <Link
            href="https://github.com/sensasi-apps/sensasi-pos"
            className="flex flex-row justify-center items-center">
            <Github className="mr-2" />
            Github
          </Link>
        </Button>
      </div>
    </div>
  )
}
