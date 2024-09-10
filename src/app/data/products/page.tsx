'use client'

import type Product from '@/@types/data/product'
import ProductCard from '@/components/product-card'
import PageUrlEnum from '@/enums/page-url'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Chip,
  Input,
  Select,
  SelectItem,
} from '@nextui-org/react'

import { Barcode, LayoutGridIcon, List, PlusCircle, Search } from 'lucide-react'
import Link from 'next/link'

const dummyProducts: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    base_cost: 10000,
    default_price: 11000,
    category: 'Category 1',
    qty: 10,
    qty_unit: 'pcs',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    base_cost: 20000,
    default_price: 22000,
    qty: 20,
    category: 'Category 2',
    qty_unit: 'pcs',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    base_cost: 30000,
    default_price: 33000,
    qty: 30,
    category: 'Category 3',
    qty_unit: 'pcs',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    base_cost: 40000,
    default_price: 44000,
    qty: 40,
    category: 'Category 4',
    qty_unit: 'pcs',
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    base_cost: 50000,
    default_price: 55000,
    qty: 50,
    category: 'Category 5',
    qty_unit: 'pcs',
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    base_cost: 60000,
    default_price: 66000,
    qty: 60,
    category: 'Category 6',
    qty_unit: 'pcs',
  },
]

export default function ProductListPage() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 max-md:col-span-12 flex items-center mb-4">
          <h1 className="text-2xl font-bold">Produk</h1>
          <Chip className="ml-4" size="sm">
            100 <i>item</i>
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

          <ButtonGroup>
            <Button isIconOnly variant="solid" color="primary">
              <List className="text-2xl text-default-400 pointer-events-none" />
            </Button>
            <Button isIconOnly variant="light">
              <LayoutGridIcon className="text-2xl text-default-400 pointer-events-none" />
            </Button>
          </ButtonGroup>

          <Button
            variant="flat"
            color="success"
            startContent={<PlusCircle />}
            as={Link}
            href={PageUrlEnum.PRODUCT_CREATE}>
            Tambah Produk
          </Button>
        </div>
      </div>

      <p className="text-default-400 text-xs text-right mb-2">
        Menampilkan 10 dari 124 <i>item</i>
      </p>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <Card shadow="sm">
            <CardBody>
              <h2 className="text-lg font-bold mb-4">Penyaring</h2>

              <Select
                label="Kategori"
                placeholder="Pilih satu atau lebih"
                selectionMode="multiple">
                <SelectItem key="1">aswda</SelectItem>
                <SelectItem key="2">aswda</SelectItem>
                <SelectItem key="3">aswda</SelectItem>
                <SelectItem key="4">aswda</SelectItem>
                <SelectItem key="5">aswda</SelectItem>
                <SelectItem key="6">aswda</SelectItem>
              </Select>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-8">
          <ul className="list-none flex flex-col gap-4">
            {dummyProducts.map((product, i) => (
              <ProductCard key={i} data={product} as="li" />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
