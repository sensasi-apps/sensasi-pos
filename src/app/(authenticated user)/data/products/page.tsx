'use client'

// vendors
import { Alert } from '@heroui/alert'
import { Button } from '@heroui/button'
import { Card, CardBody } from '@heroui/card'
import { Chip } from '@heroui/chip'
import { Input } from '@heroui/input'
import { Link } from '@heroui/link'
import { Select, SelectItem } from '@heroui/select'
import {
  Barcode,
  // LayoutGridIcon, List,
  PlusCircle,
  Search,
} from 'lucide-react'
// components
import PageUrlEnum from '@/enums/page-url'
// sub-components
import { useHook } from './_hook'
import { ProductCard } from '@/app/(authenticated user)/data/products/_components/product-card'

/**
 *
 * @todo Filter produk berdasarkan kategori.
 * @todo Tambahkan fitur pencarian produk.
 * @todo Tambahkan fitur pindai kode batang.
 */
export default function ProductListPage() {
  const { categories, nProducts, products } = useHook()

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 mb-4 flex items-center max-md:col-span-12">
          <h1 className="text-2xl font-bold">Produk</h1>
          <Chip className="ml-4" size="sm">
            {nProducts} <i>item</i>
          </Chip>
        </div>

        <div className="col-span-8 mb-4 flex items-center gap-6 max-md:col-span-12">
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
                <Barcode className="text-primary pointer-events-none text-2xl font-bold" />
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
            href={PageUrlEnum.PRODUCT_CREATE}>
            Tambah Produk
          </Button>
        </div>
      </div>

      <p className="text-default-400 mb-2 text-right text-xs">
        Menampilkan {nProducts} dari {nProducts} <i>item</i>
      </p>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <Card shadow="sm">
            <CardBody>
              <h2 className="mb-4 text-lg font-bold">Penyaring</h2>

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
                {categories.map(category => (
                  <SelectItem key={category}>{category}</SelectItem>
                ))}
              </Select>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-8">
          {nProducts === 0 && (
            <div className="flex justify-center">
              <Alert className="max-w-96 text-center">
                <p>Tidak ada data produk yang ditemukan.</p>
                <Link className="text-sm" href={PageUrlEnum.PRODUCT_CREATE}>
                  Tambah produk baru?
                </Link>
              </Alert>
            </div>
          )}

          <ul className="flex list-none flex-col gap-4">
            {products?.map(product => (
              <ProductCard key={product.uuid} data={product} as="li" />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
