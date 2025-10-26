import { Button } from '@heroui/button'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import type { UUID } from 'crypto'

import { generateOrderedUuid } from '@/functions/generate-ordered-uuid'
import { toast } from '@/functions/toast'

import db from '@/models/db'
import { Product } from '@/models/table-types/product'
import { ProductMovement } from '@/models/table-types/product-movement'
import useAuth from '@/hooks/use-auth'

import TextInput from '@/components/input-controllers/text-input'

interface FormValues {
  name: string
  qty_unit: string
  default_price: number
  stock_qty: number
  stock_cost: number
  code?: string
  category?: string
  description?: string
}

export function ProductForm({
  onProductAdded,
}: {
  onProductAdded: () => void
}) {
  const methods = useForm<FormValues>()
  const { handleSubmit, formState, reset } = methods
  const { user } = useAuth()

  const onSubmit: SubmitHandler<FormValues> = async data => {
    if (!user) {
      toast('Pengguna tidak ditemukan, silahkan login ulang')
      return
    }

    const now = new Date().toISOString()
    const productUuid = generateOrderedUuid() as UUID

    const newProduct: Product = {
      uuid: productUuid,
      name: data.name,
      qty_unit: data.qty_unit,
      default_price: Number(data.default_price),
      stock: {
        qty: Number(data.stock_qty),
        cost: Number(data.stock_cost),
      },
      code: data.code,
      category: data.category,
      description: data.description,
      created_at: now,
      updated_at: now,
    }

    const newProductMovement: ProductMovement = {
      uuid: generateOrderedUuid() as UUID,
      at: now,
      by_user_state: user,
      type: 'purchase',
      items: [
        {
          product_state: newProduct,
          qty: Number(data.stock_qty),
          price: Number(data.stock_cost),
        },
      ],
      additional_costs: [],
      files: [],
      created_at: now,
      updated_at: now,
      additional_info: {
        received_at: now,
        paid_at: now,
      },
    }

    try {
      await db.transaction('rw', db.products, db.productMovements, async () => {
        await db.products.add(newProduct)
        await db.productMovements.add(newProductMovement)
      })

      toast('Produk berhasil ditambahkan')
      reset()
      onProductAdded()
    } catch (error) {
      toast('Gagal menambahkan produk')
      console.error(error)
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="text-align-unset mt-4 flex flex-col gap-4">
        <TextInput
          rules={{ required: 'Nama produk harus diisi' }}
          name="name"
          slotProps={{
            input: { isRequired: true, label: 'Nama Produk' },
          }}
        />
        <TextInput
          rules={{ required: 'Satuan harus diisi' }}
          name="qty_unit"
          slotProps={{
            input: { isRequired: true, label: 'Satuan (cth: pcs, kg)' },
          }}
        />
        <TextInput
          rules={{ required: 'Harga jual harus diisi' }}
          name="default_price"
          slotProps={{
            input: {
              isRequired: true,
              label: 'Harga Jual per Satuan',
              type: 'number',
            },
          }}
        />
        <TextInput
          rules={{ required: 'Stok awal harus diisi' }}
          name="stock_qty"
          slotProps={{
            input: { isRequired: true, label: 'Stok Awal', type: 'number' },
          }}
        />
        <TextInput
          rules={{ required: 'Harga modal harus diisi' }}
          name="stock_cost"
          slotProps={{
            input: {
              isRequired: true,
              label: 'Harga Modal per Satuan',
              type: 'number',
            },
          }}
        />
        <TextInput
          name="code"
          slotProps={{
            input: { label: 'Kode/SKU (Opsional)' },
          }}
        />
        <TextInput
          name="category"
          slotProps={{
            input: { label: 'Kategori (Opsional)' },
          }}
        />
        <TextInput
          name="description"
          slotProps={{
            input: { label: 'Deskripsi (Opsional)' },
          }}
        />

        <Button
          type="submit"
          variant="solid"
          color="primary"
          isLoading={formState.isSubmitting}>
          Tambah Produk
        </Button>
      </form>
    </FormProvider>
  )
}
