'use client'

// vendors
import { Card, CardBody, CardHeader } from '@heroui/card'
import { Divider } from '@heroui/divider'
//
import ResetPasswordForm from './_components/reset-password-form/reset-password-form'

export default function Page() {
  return (
    <div className="container mt-8">
      <div className="flex justify-center">
        <Card className="max-w-md md:min-w-[400px]">
          <CardHeader>
            <span className="mx-auto block text-xl font-bold">
              Atur Ulang Kata Sandi
            </span>
          </CardHeader>
          <Divider />
          <CardBody>
            <ResetPasswordForm />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
