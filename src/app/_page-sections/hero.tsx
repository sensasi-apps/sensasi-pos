'use client'

// vendors
import { Card, CardHeader, CardBody } from '@heroui/card'
import { Image } from '@heroui/image'
// locals
import GridPattern from '@/components/grid-pattern'

interface FeatureItem {
  title: string
  description: string
  image: string
}

const FEATURES: FeatureItem[] = [
  {
    title: 'Tanpa Biaya',
    description: 'Aplikasi gratis dan tidak ada biaya berlangganan.',
    image:
      'https://cdn.pixabay.com/photo/2018/07/19/07/17/wallet-3548021_1280.jpg',
  },

  {
    title: 'Tanpa Internet',
    description:
      'Aplikasi sepenuhnya luring, semua data tersimpan pada perangkat Anda.',
    image:
      'https://cdn.pixabay.com/photo/2018/08/10/05/45/computer-3596169_1280.jpg',
  },

  {
    title: 'Fleksibel',
    description: 'Dapat digunakan di perangkat apa pun yang memiliki browser.',
    image:
      'https://cdn.pixabay.com/photo/2021/11/16/15/35/electronics-6801339_1280.jpg',
  },
]

export function Hero() {
  return (
    <section className={'relative grid min-h-dvh place-items-center py-28'}>
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={1}
        className={
          'inset-0 skew-y-12 mask-[radial-gradient(500px_circle_at_center,white,transparent)]'
        }
      />
      <div className={'container gap-10'}>
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="my-6 text-5xl font-bold sm:text-6xl">
            Kelola Penjualan dengan Mudah, Kapan Saja
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
            Sistem Point of Sales modern yang dapat diakses bahkan tanpa
            internet. Pantau transaksi, kelola stok, dan buat laporan dengan
            cepat dalam satu platform yang intuitif dan selalu siap digunakan.
          </p>

          {/* Disable for now */}
          {/* <Button
            className="rounded-full text-xl h-16 px-10"
            color="primary"
            isDisabled>
            Coba Sekarang
          </Button> */}

          <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(feature => (
              <FeatureItem key={feature.title} data={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({
  data: { title, description, image },
}: {
  data: FeatureItem
}) {
  return (
    <Card className="border p-2 dark:border-zinc-800" shadow="none" isBlurred>
      <CardHeader className="flex flex-col items-center text-center">
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </CardHeader>
      <CardBody className="justify-end overflow-visible py-2">
        <Image
          alt={title}
          className="m-auto aspect-video rounded-xl object-cover"
          src={image}
        />
      </CardBody>
    </Card>
  )
}
