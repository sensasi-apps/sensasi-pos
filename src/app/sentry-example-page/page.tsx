'use client'

import { Button } from '@nextui-org/react'

export default function SentryExamplePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Sentry Example Page</h1>

      <Button
        color="danger"
        onClick={() => {
          throw new Error('Sentry Example Page Error')
        }}>
        Throw Error
      </Button>
    </div>
  )
}
