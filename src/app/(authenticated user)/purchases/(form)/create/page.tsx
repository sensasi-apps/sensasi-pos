'use client'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react'
import { usePageHook } from './page-hook'

const FORM_ID = 'purchase-create-form'

export default function PurchaseFormPage() {
  const { handleSubmit, handleCancel } = usePageHook()

  return (
    <Card>
      <CardHeader>Formulir Pembelian Baru</CardHeader>
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
