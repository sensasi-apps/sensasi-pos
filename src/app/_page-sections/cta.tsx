'use client'

import { Button, Tooltip } from '@nextui-org/react'
import { useState } from 'react'

export function Cta() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  return (
    <section className="container">
      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-10 rounded-2xl grid place-items-center">
        <h2 className="text-3xl font-bold mb-8 text-white">
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
          <Button className="rounded-full text-xl h-16 px-10 cursor-not-allowed">
            Coba Sekarang
          </Button>
        </Tooltip>
      </div>
    </section>
  )
}
