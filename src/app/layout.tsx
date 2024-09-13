// vendors
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
// local modules
import './_components/main.css'
import { Providers } from './_components/providers'
import { PageIndicator } from './_components/page-indicator'
import { roboto } from './_components/font'

export const metadata: Metadata = {
  title: 'Sensasi POS',
  description:
    'Aplikasi Point of Sale sederhana yang dirancang untuk membantu pencatatan penjualan barang pada Warung / Toko / UMKM / Stan / Gerai / Swalayan.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
          {children}

          <PageIndicator />
        </Providers>

        <Analytics mode="production" debug={false} />
      </body>
    </html>
  )
}
