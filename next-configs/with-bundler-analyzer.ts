import createWithBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = createWithBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer
