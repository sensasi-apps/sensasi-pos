import { Card, CardHeader, CardBody } from '@nextui-org/react'
import { FileDown, GalleryHorizontalEnd, TvMinimalPlay } from 'lucide-react'
import { Button } from '@nextui-org/react'
import PageUrlEnum from '@/enums/page-url'
import Link from 'next/link'

export const OnBoardCard = () => {
  return (
    <div className="grid lg:grid-cols-3 xs:grid-rows-1 sm:grid-cols-2 gap-6">
      <Card className="p-4 border-2 border-transparent hover:border-[#2081F0]">
        <CardHeader className="flex-col items-center px-4 pb-0">
          <TvMinimalPlay size={80} color="#2081F0"/>
        </CardHeader>
        <CardBody className="pb-2 pt-5 space-y-3">
          <h4 className="text-base font-bold text-center">Gunakan Data Demo</h4>
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
      <Card className="p-4 border-2 border-transparent hover:border-[#2081F0]">
        <CardHeader className="flex-col items-center px-4 pb-0">
          <FileDown size={80} color="#2081F0"/>
        </CardHeader>
        <CardBody className="pb-2 pt-5 space-y-3">
          <h4 className="text-base font-bold text-center">Impor Data Hasil Pencadangan</h4>
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
      <Card className="p-4 border-2 border-transparent hover:border-[#2081F0]">
        <CardHeader className="flex-col items-center px-4 pb-0">
          <GalleryHorizontalEnd size={80} color="#2081F0"/>
        </CardHeader>
        <CardBody className="pb-2 pt-5 space-y-3">
          <h4 className="text-base font-bold text-center">Mulai Ulang Dari Awal</h4>
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