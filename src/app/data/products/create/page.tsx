'use client'

import ProductForm from '@/components/product-form'
import PageUrlEnum from '@/enums/page-url'
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

export default function ProductCreatePage() {
  const router = useRouter()

  return (
    <div className="flex justify-center">
      <Card className="max-w-md" fullWidth>
        <CardHeader className="font-bold">Masukkan Data Produk</CardHeader>

        <CardBody>
          <ProductForm
            id="product-create-form"
            data={{}}
            onSubmit={async values => {
              const newProductId = await db.products
                .add({
                  ...values,
                  created_at: dayjs().toISOString(),
                  updated_at: dayjs().toISOString(),
                } as Product)
                .catch(console.error)

              if (!values.code && newProductId) {
                await db.products.update(newProductId, {
                  code: newProductId.toString(),
                })
              }

              router.push(PageUrlEnum.PRODUCT_LIST)
            }}
          />
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