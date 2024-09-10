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

const dummyProduct = {
  id: 1,
  barcode_reg_id: '1234567890',
  code: '1234567890',
  name: 'Product Name',
  description: 'Product Description',
  base_cost: 10000,
  default_price: 15000,
  qty: 10,
  qty_unit: 'pcs',
  category: 'Category',
}

// {params: {id}}:{ params: { id: number } }
export default function ProductEditPage() {
  const router = useRouter()

  return (
    <div className="flex justify-center">
      <Card className="max-w-md" fullWidth>
        <CardHeader className="font-bold">
          Perbaharui Data Produk {dummyProduct.name}
        </CardHeader>
        <CardBody>
          <ProductForm id="product-create-form" data={dummyProduct} />
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
