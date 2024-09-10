'use client'

import ProductForm from '@/components/product-form'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function ProductCreatePage() {
  const router = useRouter()

  return (
    <div className="flex justify-center">
      <Card className="max-w-md" fullWidth>
        <CardHeader className="font-bold">Masukkan Data Produk</CardHeader>
        <CardBody>
          <ProductForm id="product-create-form" data={{}} />
        </CardBody>
        <CardFooter className="flex justify-end">
          <Button onClick={() => router.back()} variant="light" color="primary">
            Batal
          </Button>

          <Button type="submit" form="product-create-form" color="primary">
            Simpan
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
