'use client'

// vendors
import { Button } from '@heroui/button'
import { Card, CardHeader, CardBody } from '@heroui/card'
// icons
import { FileDown, GalleryHorizontalEnd, TvMinimalPlay } from 'lucide-react'
//
import PageUrlEnum from '@/enums/page-url'
import { Link } from '@heroui/link'

export const OnBoardCard = () => {
  return (
    <div className="xs:grid-rows-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="border-2 border-transparent p-4 hover:border-[#2081F0]">
        <CardHeader className="flex-col items-center px-4 pb-0">
          <TvMinimalPlay size={80} color="#2081F0" />
        </CardHeader>

        <CardBody className="space-y-3 pt-5 pb-2">
          <h4 className="text-center text-base font-bold">Gunakan Data Demo</h4>
          <Button
            className="font-medium"
            size="sm"
            variant="solid"
            color="primary"
            onClick={() => alert('Coming soon!')}>
            Mulai
          </Button>
        </CardBody>
      </Card>

      <Card className="border-2 border-transparent p-4 hover:border-[#2081F0]">
        <CardHeader className="flex-col items-center px-4 pb-0">
          <FileDown size={80} color="#2081F0" />
        </CardHeader>
        <CardBody className="space-y-3 pt-5 pb-2">
          <h4 className="text-center text-base font-bold">
            Impor Data Hasil Pencadangan
          </h4>
          <Button
            className="font-medium"
            size="sm"
            variant="solid"
            color="primary"
            as={Link}
            href={PageUrlEnum.ONBOARDING_IMPORT_BACKUP}>
            Mulai
          </Button>
        </CardBody>
      </Card>

      <Card className="border-2 border-transparent p-4 hover:border-[#2081F0]">
        <CardHeader className="flex-col items-center px-4 pb-0">
          <GalleryHorizontalEnd size={80} color="#2081F0" />
        </CardHeader>
        <CardBody className="space-y-3 pt-5 pb-2">
          <h4 className="text-center text-base font-bold">
            Mulai Ulang Dari Awal
          </h4>
          <Button
            className="font-medium"
            size="sm"
            variant="solid"
            color="primary"
            as={Link}
            href={PageUrlEnum.ONBOARDING_STEP_1}>
            Mulai
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}
