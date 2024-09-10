'use client'

import ProductForm from '@/components/product-form'
import db from '@/models/db'
import Product from '@/models/table-types/product'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProductEditPage({
  params: { id },
}: {
  params: { id: number }
}) {
  const router = useRouter()
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    db.products
      .get(Number(id))
      .then(setProduct)
      .catch(err => {
        throw err
      })
  }, [id])

  return (
    <div className="flex justify-center">
      <Card className="max-w-md" fullWidth>
        <CardHeader className="font-bold">
          Perbaharui Data Produk {product?.name}
        </CardHeader>

        <CardBody>
          {product && (
            <ProductForm
              id="product-update-form"
              data={product}
              onSubmit={values => {
                db.products
                  .update(Number(id), {
                    ...values,
                    updated_at: dayjs().toISOString(),
                  })
                  .then(() => {
                    router.push('/data/products')
                  })
                  .catch(err => {
                    throw err
                  })
              }}
            />
          )}
        </CardBody>

        <CardFooter className="flex justify-end">
          <Button onClick={() => router.back()} variant="light" color="primary">
            Batal
          </Button>

          <Button type="submit" form="product-update-form" color="primary">
            Simpan
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
