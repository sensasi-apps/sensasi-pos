'use client'

// vendors
import { Card, Image, CardHeader, CardBody } from '@nextui-org/react'
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
    <section className={'min-h-dvh grid place-items-center relative py-28'}>
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={1}
        className={
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-0 skew-y-12'
        }
      />
      <div className={'container gap-10'}>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="sm:text-6xl text-5xl font-bold my-6">
            Kelola Penjualan dengan Mudah, Kapan Saja
          </h1>

          <p className="text-lg dark:text-gray-400 text-gray-600 max-w-3xl mx-auto">
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

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 mx-auto gap-6 mt-12">
            {FEATURES.map((feature, i) => (
              <FeatureItem key={i} data={feature} />
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
    <Card className="p-2 border dark:border-zinc-800" shadow="none" isBlurred>
      <CardHeader className="flex flex-col text-center items-center">
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 justify-end">
        <Image
          alt={title}
          className="object-cover rounded-xl m-auto aspect-video"
          src={image}
        />
      </CardBody>
    </Card>
  )
}
