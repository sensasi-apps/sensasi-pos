'use client'

import { ProductFormPageTemplate } from '../_components/page-template'
import { useHook } from './_hook'

export default function ProductCreatePage() {
  return <ProductFormPageTemplate {...useHook()} />
}
