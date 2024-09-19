'use client'

import { ProductFormPageTemplate } from '../_components/page-template'
import { useHook } from './_hook'

export default function ProductUpdatePage({
  params: { uuid },
}: {
  params: { uuid: string }
}) {
  return <ProductFormPageTemplate {...useHook(uuid)} />
}
