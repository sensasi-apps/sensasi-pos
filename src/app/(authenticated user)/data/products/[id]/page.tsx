'use client'

// vendors
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react'
// sub-components
import { ProductForm } from '@/app/(authenticated user)/data/products/_components/product-form'
import { useHook } from './_hook'

export default function ProductFormPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const { product, handleSubmit, handleCancel } = useHook(id)

  return (
    <div className="flex justify-center">
      <Card className="max-w-md" fullWidth>
        <CardHeader className="font-bold">
          {product?.name
            ? `Perbaharui Data — ${product.name}`
            : 'Masukkan Data Produk'}
        </CardHeader>

        <CardBody>
          {product && (
            <ProductForm
              id="product-form"
              data={product}
              onSubmit={handleSubmit}
            />
          )}
        </CardBody>

        <CardFooter className="flex justify-end gap-2">
          <Button onClick={handleCancel} variant="light" color="primary">
            Batal
          </Button>

          <Button type="submit" form="product-form" color="primary">
            Simpan
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
