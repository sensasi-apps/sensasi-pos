'use client'

// vendors
import { Button } from '@heroui/button'
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card'
//
import { usePageHook } from './page-hook'
import { use } from 'react'

const FORM_ID = 'purchase-update-form'

export default function PurchaseFormPage({
  params,
}: {
  params: Promise<{ uuid: string }>
}) {
  const { uuid } = use(params)
  const { handleSubmit, handleCancel, formValues } = usePageHook(uuid)

  return (
    <Card>
      <CardHeader>Sunting Pembelian — NO. {formValues?.uuid}</CardHeader>

      <CardBody>
        <form
          id={FORM_ID}
          onSubmit={() => {
            handleSubmit()
          }}></form>
      </CardBody>

      <CardFooter>
        <Button variant="light" color="primary" onClick={handleCancel}>
          Batal
        </Button>

        <Button color="primary" form={FORM_ID} type="submit">
          Simpan
        </Button>
      </CardFooter>
    </Card>
  )
}
