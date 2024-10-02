import React from 'react'
import { Image } from '@nextui-org/react'
// import NextImage from 'next/image'

const dummyProducts = [
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
    category: 'Category 2',
    qty: 20,
    qty_unit: 'pcs',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    base_cost: 30000,
    default_price: 33000,
    category: 'Category 3',
    qty: 30,
    qty_unit: 'pcs',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    base_cost: 40000,
    default_price: 44000,
    category: 'Category 4',
    qty: 40,
    qty_unit: 'pcs',
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    base_cost: 50000,
    default_price: 55000,
    category: 'Category 5',
    qty: 50,
    qty_unit: 'pcs',
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    base_cost: 60000,
    default_price: 66000,
    category: 'Category 6',
    qty: 60,
    qty_unit: 'pcs',
  },
]

/**
 * @todo Implement NextImage component
 */
const Page = () => {
  return (
    <div className="grid grid-cols-3 items-center justify-between gap-12 py-12">
      {dummyProducts.map(data => {
        return (
          <span
            key={data.id}
            className="mx-auto rounded-md border border-b-2 border-l-2 dark:border-white">
            <div className="ml-12 mr-12 items-center justify-center">
              <Image
                // as={NextImage}
                width="480"
                height="480"
                src="https://nextui.org/images/album-cover.png"
                alt=""
              />
            </div>
            <div className="ml-4 items-start overflow-hidden text-ellipsis text-center font-bold">
              {data.name}
              <p className="pt-1 text-left text-sm font-light text-slate-400">
                {data.description}
              </p>
              <div className="mt-2 flex justify-between text-lg text-slate-400">
                <span className="text-lg text-slate-200 md:text-sm">
                  {data.default_price} IDR
                </span>
              </div>
              <p className="mt-4"></p>
            </div>
          </span>
        )
      })}
    </div>
  )
}

export default Page
