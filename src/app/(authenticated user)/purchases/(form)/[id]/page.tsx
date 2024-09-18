'use client'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react'
import { usePageHook } from './page-hook'

const FORM_ID = 'purchase-update-form'

/**
 *
 * @todo Change parameter 'id' to 'uuid'
 */
export default function PurchaseFormPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const { handleSubmit, handleCancel, formValues } = usePageHook(id)

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
