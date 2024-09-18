'use client'

// vendors
import Link from 'next/link'
import { Button } from '@nextui-org/react'
// global
import PageUrlEnum from '@/enums/page-url'
// local
import { usePageHook } from './page-hook'

export default function PurchaseListPage() {
  const { productMovements } = usePageHook()

  return (
    <>
      <Button as={Link} href={PageUrlEnum.PURCHASE_CREATE}>
        Create
      </Button>

      <ul>
        {productMovements?.map(movement => (
          <li key={movement.uuid}>{movement.uuid}</li>
        ))}
      </ul>
    </>
  )
}
