'use client'

import { ProductFormPageTemplate } from '../_components/page-template'
import { useHook } from './_hook'
import { use } from 'react'

export default function ProductUpdatePage({
  params,
}: {
  params: Promise<{ uuid: string }>
}) {
  const { uuid } = use(params)
  return <ProductFormPageTemplate {...useHook(uuid)} />
}
