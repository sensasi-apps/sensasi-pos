import { Card, CardBody } from '@nextui-org/react'
import { WalletIcon, WifiOff } from 'lucide-react'

interface FeatureItem {
  title: string
  description: string
  icon: typeof WifiOff
}

const FEATURES: FeatureItem[] = [
  {
    title: 'Tanpa Biaya',
    description: 'Aplikasi gratis dan tidak ada biaya berlangganan.',
    icon: WalletIcon,
  },

  {
    title: 'Tanpa Internet',
    description:
      'Aplikasi sepenuhnya luring, semua data tersimpan pada perangkat Anda.',
    icon: WifiOff,
  },

  {
    title: 'Fleksibel',
    description: 'Dapat digunakan di perangkat apa pun yang memiliki browser.',
    icon: WalletIcon,
  },
]

export function Features() {
  return (
    <section className="text-center pt-16">
      <h2 className="text-3xl font-bold px-16 text-center">
        Mengapa Memilih Sensasi POS?
      </h2>

      <div className="container mx-auto snap-x flex gap-8 overflow-x-auto px-32 py-16">
        {FEATURES.map((feature, i) => (
          <FeatureItem key={i} data={feature} />
        ))}
      </div>
    </section>
  )
}

function FeatureItem({
  data: { title, description, icon: Icon },
}: {
  data: FeatureItem
}) {
  return (
    <Card
      className="min-w-72 snap-center"
      classNames={{
        body: 'p-8',
      }}>
      <CardBody>
        <Icon className="text-primary mx-auto mb-8 my-4" size={48} />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </CardBody>
    </Card>
  )
}
