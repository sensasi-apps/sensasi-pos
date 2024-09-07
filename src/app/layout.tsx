import Providers from '@/providers'
import type { Metadata } from 'next'
import { roboto } from './font'
import './globals.css'
import { PageIndicator } from '@/components/page-indicator'
import mergeClass from '@/functions/merge-class'

export const metadata: Metadata = {
  title: 'Sensasi POS',
  description: 'Sensasi POS adalah aplikasi kasir yang mudah digunakan.',
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
      <body className={mergeClass(roboto.className)}>
        <Providers>
          {children}
          <PageIndicator />
        </Providers>
      </body>
    </html>
  )
}
