'use client'

// vendors
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
//
import { usePageHook } from './page-hook'

const FORM_ID = 'purchase-update-form'

export default function PurchaseFormPage({
  params: { uuid },
}: {
  params: { uuid: string }
}) {
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
