'use client'

// vendors
import { Button, Tooltip } from '@nextui-org/react'
import { ComputerIcon } from 'lucide-react'
import { useState } from 'react'
// locals
import mergeClass from '@/functions/merge-class'

export function Hero() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  return (
    <section className={mergeClass('bg-blue-600 text-white p-16')}>
      <div
        className={mergeClass(
          'mx-auto',
          'max-w-3xl',
          'grid grid-cols-7 gap-16',
          'max-md:flex max-md:flex-col-reverse max-md:items-center',
        )}>
        <div className="md:col-span-4">
          <h1 className="text-4xl font-bold mb-4">
            Kelola Usaha Anda Sebebasnya
          </h1>

          <p className="text-lg mb-16">
            Dengan Sensasi POS yang mudah digunakan dan efisien, tanpa perlu
            koneksi internet.
          </p>

          <Tooltip
            isOpen={isTooltipOpen}
            onOpenChange={open => {
              setIsTooltipOpen(open)
            }}
            onTouchStart={() => {
              setIsTooltipOpen(true)
            }}
            onTouchCancel={() => {
              setIsTooltipOpen(false)
            }}
            content="ⓘ Aplikasi masih dalam tahap pengembangan. Silakan kunjungi lagi nanti."
            showArrow
            color="warning"
            placement="right">
            <div className="max-w-fit">
              <Button
                isDisabled
                className="bg-white rounded-full text-primary"
                variant="shadow"
                size="lg">
                Coba Sekarang
              </Button>
            </div>
          </Tooltip>
        </div>

        <div
          className={mergeClass(
            'max-md:max-w-56 aspect-square p-10',
            'shadow-2xl rounded-3xl',
            'md:col-span-3',
          )}>
          <ComputerIcon size="100%" />
        </div>
      </div>
    </section>
  )
}
