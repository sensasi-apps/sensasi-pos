'use client'

import ProductCard from '@/components/product-card'
import PageUrlEnum from '@/enums/page-url'
import db from '@/models/db'
import {
  Button,
  // ButtonGroup,
  Card,
  CardBody,
  Chip,
  Input,
  Link,
  Select,
  SelectItem,
} from '@nextui-org/react'

import { useLiveQuery } from 'dexie-react-hooks'

import {
  Barcode,
  // LayoutGridIcon, List,
  PlusCircle,
  Search,
} from 'lucide-react'
import NextLink from 'next/link'
import NextuiAlert from 'nextui-alert'
// import { useEffect, useState } from 'react'

export default function ProductListPage() {
  const products = useLiveQuery(() => db.products.toArray())
  const nProducts = products?.length ?? 0
  const categories =
    products
      ?.map(product => product.category)
      .filter((v, i, a) => v && a.indexOf(v) === i) ?? []

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 max-md:col-span-12 flex items-center mb-4">
          <h1 className="text-2xl font-bold">Produk</h1>
          <Chip className="ml-4" size="sm">
            {nProducts} <i>item</i>
          </Chip>
        </div>

        <div className="col-span-8 flex max-md:col-span-12 items-center mb-4 gap-6">
          <Input
            className="flex-1"
            variant="bordered"
            placeholder="Cari Produk"
            startContent={<Search className="text-default-400" />}
            endContent={
              <Button
                isIconOnly
                aria-label="Pindai kode batang"
                variant="light">
                <Barcode className="text-2xl text-primary font-bold pointer-events-none" />
              </Button>
            }
          />

          {/* <ButtonGroup>
            <Button isIconOnly variant="solid" color="primary">
              <List className="text-2xl text-default-400 pointer-events-none" />
            </Button>
            <Button isIconOnly variant="light">
              <LayoutGridIcon className="text-2xl text-default-400 pointer-events-none" />
            </Button>
          </ButtonGroup> */}

          <Button
            variant="flat"
            color="success"
            startContent={<PlusCircle />}
            as={NextLink}
            href={PageUrlEnum.PRODUCT_CREATE}>
            Tambah Produk
          </Button>
        </div>
      </div>

      <p className="text-default-400 text-xs text-right mb-2">
        Menampilkan {nProducts} dari {nProducts} <i>item</i>
      </p>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <Card shadow="sm">
            <CardBody>
              <h2 className="text-lg font-bold mb-4">Penyaring</h2>

              <Select
                label="Kategori"
                placeholder="Pilih satu atau lebih"
                selectionMode="multiple"
                disabled={categories.length === 0}
                description={
                  categories.length === 0
                    ? 'Mohon untuk menambahkan produk terlebih dahulu.'
                    : undefined
                }>
                {categories.map((category, i) => (
                  <SelectItem key={i}>{category}</SelectItem>
                ))}
              </Select>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-8">
          {nProducts === 0 && (
            <div className="flex justify-center">
              <NextuiAlert className="text-center max-w-96">
                <p>Tidak ada data produk yang ditemukan.</p>
                <Link
                  className="text-sm"
                  href={PageUrlEnum.PRODUCT_CREATE}
                  as={NextLink}>
                  Tambah produk baru?
                </Link>
              </NextuiAlert>
            </div>
          )}

          <ul className="list-none flex flex-col gap-4">
            {products?.map((product, i) => (
              <ProductCard key={i} data={product} as="li" />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
