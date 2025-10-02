'use client'

// vendors
import { Button } from '@heroui/button'
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card'
// sub-components
import { ProductForm } from '@/app/(authenticated user)/data/products/(form)/_components/product-form'
import { useHook as updateUseHook } from '../[uuid]/_hook'
import { useHook as createUseHook } from '../create/_hook'

export function ProductFormPageTemplate(
  props: ReturnType<typeof createUseHook> | ReturnType<typeof updateUseHook>,
) {
  const { product, handleSubmit, handleCancel } = props

  const cardTitile = product?.name
    ? `Perbaharui Data — ${product.name}`
    : 'Masukkan Data Produk'

  return (
    <main className="flex justify-center">
      <Card className="max-w-md" fullWidth>
        <CardHeader className="font-bold">{cardTitile}</CardHeader>

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
    </main>
  )
}
