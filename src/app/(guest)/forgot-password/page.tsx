'use client'

import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import EmailForm from './_components/email-form'
import SecurityQuestionForm from './_components/security-question'
import Link from 'next/link'
import PageUrlEnum from '@/enums/page-url'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const query = useSearchParams()
  const selectedMethod = query.get('method')

  return (
    <div className="container my-8">
      <div className="flex justify-center">
        <Card className="max-w-md md:min-w-[400px]">
          <CardHeader>
            <span className="mx-auto block text-xl font-bold">
              Lupa Kata Sandi
            </span>
          </CardHeader>
          <Divider />
          <CardBody>
            {selectedMethod === 'security-question' ? (
              <SecurityQuestionForm />
            ) : (
              <EmailForm />
            )}

            <Link
              className="mt-4 block cursor-pointer text-center text-sm outline-none"
              href={`${PageUrlEnum.FORGOT_PASSWORD}?method=${selectedMethod === 'security-question' ? 'email' : 'security-question'}`}>
              Coba Cara Lain?
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
