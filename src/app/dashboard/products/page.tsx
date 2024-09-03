import type Product from '@/@types/data/product'
import ProductCard from '@/components/product-card'

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

export default function ProductsPage() {
  return (
    <>
      <ul className="list-none flex flex-col gap-4">
        {dummyProducts.map((product, i) => (
          <ProductCard key={i} data={product} as="li" />
        ))}
      </ul>
    </>
  )
}
