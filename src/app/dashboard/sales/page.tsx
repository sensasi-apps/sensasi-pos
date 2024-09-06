import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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

const page = () => {
  return (
    <div className="grid grid-cols-3 gap-12 justify-between items-center py-12 ">
      {dummyProducts.map(data => {
        return (
          <>
            <span
              key={data.id}
              className="border border-b-2 border-l-2 rounded-md dark:border-white mx-auto">
              <div className="ml-12 mr-12 items-center justify-center">
                <Link href="#">
                  <Image width="480" height="480" src="/dominos.png" alt="" />
                </Link>
              </div>
              <div className="text-ellipsis overflow-hidden ml-4 font-bold text-center items-start">
                {data.name}
                <p className="pt-1 text-left font-light text-sm text-slate-400">
                  {data.description}
                </p>
                <div className="flex mt-2 justify-between text-lg text-slate-400">
                  <span className="md:text-sm text-lg text-slate-200">
                    {data.default_price} IDR
                  </span>
                </div>
                <p className="mt-4"></p>
              </div>
            </span>
          </>
        )
      })}
    </div>
  )
}

export default page
