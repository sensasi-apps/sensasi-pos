import type { NextConfig } from 'next'
import withBundleAnalyzer from './next-configs/with-bundler-analyzer'
import withSentryConfig from './next-configs/with-sentry-config'

const nextConfig: NextConfig = {
  experimental: {
    /**
     * Some libraries are optimized by default, see https://nextjs.org/docs/app/api-reference/config/next-config-js/optimizePackageImports for the full list.
     */
    optimizePackageImports: [
      '@heroui',
      'framer-motion',
      'react-hot-toast',
      'next-nprogress-bar',
      'next-themes',
    ],
  },
}

export default withBundleAnalyzer(withSentryConfig(nextConfig))
