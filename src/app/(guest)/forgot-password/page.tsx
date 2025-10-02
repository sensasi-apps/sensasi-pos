'use client'

// vendors
import { Card, CardBody, CardHeader } from '@heroui/card'
import { Divider } from '@heroui/divider'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
//
import { useFormSubmissionState } from '@/stores/form-submission'
import EmailForm from './_components/email-form'
import PageUrlEnum from '@/enums/page-url'
import SecurityQuestionForm from './_components/security-question'

export default function Page() {
  const { isSubmitting } = useFormSubmissionState()
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
              className={`${isSubmitting ? 'text-default-400 pointer-events-none' : 'pointer-events-auto'} mx-auto mt-4 block w-fit cursor-pointer text-center text-sm outline-none`}
              href={`${PageUrlEnum.FORGOT_PASSWORD}?method=${selectedMethod === 'security-question' ? 'email' : 'security-question'}`}>
              Coba Cara Lain?
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
