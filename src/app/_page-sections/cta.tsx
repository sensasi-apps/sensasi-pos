'use client'

import { Button, Tooltip } from '@nextui-org/react'
import { useState } from 'react'

export function Cta() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  return (
    <section className="container">
      <div className="grid place-items-center rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-10">
        <h2 className="mb-8 text-3xl font-bold text-white">
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
          <Button className="h-16 cursor-not-allowed rounded-full px-10 text-xl">
            Coba Sekarang
          </Button>
        </Tooltip>
      </div>
    </section>
  )
}
