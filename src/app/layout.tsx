// vendors
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
// local modules
import './_layout-components/main.css'
import Providers from './_layout-components/providers'
import { PageIndicator } from './_layout-components/page-indicator'
import { sans } from './_layout-components/font'
import ProgressBar from '@/components/progress-bar'
import Navbar from './_layout-components/navbar'

export const metadata: Metadata = {
  title: 'Sensasi POS — Aplikasi Point of Sale Sederhana',
  description:
    'Aplikasi Point of Sale sederhana yang dirancang untuk membantu pencatatan penjualan barang pada Warung / Toko / UMKM / Stan / Gerai / Swalayan.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <html
      lang="en"
      className="transition-[background-color] duration-1000 ease-in-out"
      suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>

      <body className={sans.className}>
        <ProgressBar>
          <Providers>
            <Navbar />

            <div className="sticky top-0 z-20 w-full bg-amber-500 p-2.5 text-center tracking-wide text-zinc-800">
              ⓘ Aplikasi masih dalam tahap pengembangan. Silakan kunjungi lagi
              nanti.
            </div>

            {children}

            <PageIndicator />
          </Providers>
        </ProgressBar>

        {isProduction && <Analytics mode="production" debug={false} />}
      </body>
    </html>
  )
}
