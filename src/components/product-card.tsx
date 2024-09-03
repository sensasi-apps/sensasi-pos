'use client'

import type Product from '@/@types/data/product'
import formatNumber from '@/lib/utils/format-number'
import { Card, CardBody, Image, CardProps, Chip } from '@nextui-org/react'

export default function ProductCard({
  data: { name, base_cost, default_price, qty_unit, qty, category },
  className,
  as,
}: {
  data: Product
  onClick?: () => void
  as?: CardProps['as']
  className?: CardProps['className']
}) {
  return (
    <Card
      as={as}
      isPressable
      isBlurred
      className={
        'light:border-none bg-background/60 dark:bg-default-100/50 w-full' +
        (className ? ` ${className}` : '')
      }
      shadow="sm">
      <CardBody>
        <div className="flex">
          <div className="flex-none">
            <Image
              alt="Album cover"
              className="object-cover"
              width={64}
              shadow="md"
              src="https://nextui.org/images/album-cover.png"
            />
          </div>

          <div className="flex flex-1 ml-6 items-center">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 w-full">
              <div className="col-span-6 md:col-span-8 border-r-2 max-md:border-none">
                <h2 className="text-lg mb-1">{name}</h2>

                <div className="text-sm font-medium flex gap-2 items-center">
                  <Chip size="sm">{category}</Chip>
                  <span>•</span>
                  <span>
                    {formatNumber(qty)} {qty_unit}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center col-span-3 md:col-span-2">
                <h3 className="text-sm">HPP</h3>
                <p className="text-xl">{formatNumber(base_cost)}</p>
              </div>

              <div className="flex flex-col justify-center items-center col-span-3 md:col-span-2">
                <h3 className="text-sm">Harga Jual</h3>
                <p className="text-xl">{formatNumber(default_price)}</p>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
