'use client'

import React from 'react'
import { Star, ShoppingCart, CreditCard } from 'lucide-react'

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

interface ProductCardProps {
  id: string
  category: string
  name: string
  description: string
  price: number
  image: string
  rating: number
  onAddToCart: () => void
  onBuyNow: () => void // Todo || Tambah produk ke BuyNow
}


const ProductCard = ({ 
  category, 
  name, 
  description, 
  price, 
  image, 
  rating, 
  onBuyNow,
  onAddToCart,
}: ProductCardProps) => {

  return (
    <div onClick={onAddToCart} className="group w-full max-w-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src="/dominos.png"
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-1 light:text-black dark:text-slate-200 truncate">{name}</h3>
        <p className="dark:text-slate-200 light:text-gray-800 text-sm mb-2 line-clamp-2">{description}</p>
        <p className="dark:text-slate-200 light:text-black text-lg font-bold mb-2">Rp.{price}</p>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-gray-600 text-sm">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dummyProducts.map(product => (
        <ProductCard
          key={product.id}
          id={String(product.id)}
          category={product.category}
          name={product.name}
          description={product.description}
          price={product.default_price}
          image="/placeholder.svg?height=400&width=300"
          rating={4.5}
          onAddToCart= {() => console.log(`Bought ${product.name}`)}
          onBuyNow={() => console.log(`Bought ${product.name}`)}
        />
      ))}
    </div>
  )
}

export default ProductList
