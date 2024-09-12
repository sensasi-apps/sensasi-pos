import './_components/firebase'
import './_components/main.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Providers } from '@/app/_components/providers'
import { PageIndicator } from '@/app/_components/page-indicator'

export const metadata: Metadata = {
  title: 'Sensasi POS',
  description:
    'Aplikasi Point of Sale sederhana yang dirancang untuk membantu pencatatan penjualan barang pada Warung / Toko / UMKM / Stan / Gerai / Swalayan.',
}

const BODY_CLASSNAME = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
}).className

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

      <body className={BODY_CLASSNAME}>
        <Providers>
          {children}

          <PageIndicator />
        </Providers>
      </body>
    </html>
  )
}
