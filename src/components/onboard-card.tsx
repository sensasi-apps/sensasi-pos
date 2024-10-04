import { Card, CardHeader, CardBody } from '@nextui-org/react'
import { FileDown, GalleryHorizontalEnd, TvMinimalPlay } from 'lucide-react'
import { Button } from '@nextui-org/react'
import PageUrlEnum from '@/enums/page-url'
import Link from 'next/link'

export const OnBoardCard = () => {
  return (
    <div className="xs:grid-rows-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="border-2 border-transparent p-4 hover:border-[#2081F0]">
        <CardHeader className="flex-col items-center px-4 pb-0">
          <TvMinimalPlay size={80} color="#2081F0" />
        </CardHeader>
        <CardBody className="space-y-3 pb-2 pt-5">
          <h4 className="text-center text-base font-bold">Gunakan Data Demo</h4>
          <Button
            className="font-medium"
            size="sm"
            variant="solid"
            color="primary"
            href={PageUrlEnum.ONBOARDING_IMPORT_BACKUP}
            as={Link}>
            Mulai
          </Button>
        </CardBody>
      </Card>
      <Card className="border-2 border-transparent p-4 hover:border-[#2081F0]">
        <CardHeader className="flex-col items-center px-4 pb-0">
          <FileDown size={80} color="#2081F0" />
        </CardHeader>
        <CardBody className="space-y-3 pb-2 pt-5">
          <h4 className="text-center text-base font-bold">
            Impor Data Hasil Pencadangan
          </h4>
          <Button
            className="font-medium"
            size="sm"
            variant="solid"
            color="primary"
            href={PageUrlEnum.ONBOARDING_IMPORT_BACKUP}
            as={Link}>
            Mulai
          </Button>
        </CardBody>
      </Card>
      <Card className="border-2 border-transparent p-4 hover:border-[#2081F0]">
        <CardHeader className="flex-col items-center px-4 pb-0">
          <GalleryHorizontalEnd size={80} color="#2081F0" />
        </CardHeader>
        <CardBody className="space-y-3 pb-2 pt-5">
          <h4 className="text-center text-base font-bold">
            Mulai Ulang Dari Awal
          </h4>
          <Button
            className="font-medium"
            size="sm"
            variant="solid"
            color="primary"
            href={PageUrlEnum.ONBOARDING_IMPORT_BACKUP}
            as={Link}>
            Mulai
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}
