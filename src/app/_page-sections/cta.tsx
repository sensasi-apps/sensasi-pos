'use client'

import { Button, Tooltip } from '@nextui-org/react'
import { useState } from 'react'

export function Cta() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  return (
    <section className="py-16 px-8 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">
        Mulai Mengelola Usaha Anda Sekarang
      </h2>

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
        color="warning">
        <div>
          <Button
            isDisabled
            className="bg-white rounded-full text-primary"
            variant="shadow"
            size="lg">
            Coba Sekarang
          </Button>
        </div>
      </Tooltip>
    </section>
  )
}
