// vendors
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Card, CardBody } from '@nextui-org/react'
// local modules
import './_layout-components/main.css'
import { Providers } from './_layout-components/providers'
import { PageIndicator } from './_layout-components/page-indicator'
import { roboto } from './_layout-components/font'

export const metadata: Metadata = {
  title: 'Sensasi POS — Aplikasi Point of Sale Sederhana',
  description:
    'Aplikasi Point of Sale sederhana yang dirancang untuk membantu pencatatan penjualan barang pada Warung / Toko / UMKM / Stan / Gerai / Swalayan.',
}

export default function RootLayout({
  children,
  navbar,
}: Readonly<{
  children: React.ReactNode
  navbar: React.ReactNode
}>) {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <html
      lang="en"
      className="transition-[background-color] duration-1000 ease-in-out">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>

      <body className={roboto.className}>
        <Providers>
          {navbar}

          {isProduction && (
            <Card
              fullWidth
              className="sticky top-0 z-10 bg-amber-500 text-zinc-800 tracking-wide"
              classNames={{
                base: 'rounded-none border-none',
                body: 'text-center',
              }}>
              <CardBody>
                ⓘ Aplikasi masih dalam tahap pengembangan. Silakan kunjungi lagi
                nanti.
              </CardBody>
            </Card>
          )}

          {children}

          <PageIndicator />
        </Providers>

        {isProduction && <Analytics mode="production" debug={false} />}
      </body>
    </html>
  )
}
