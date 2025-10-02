import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import unicorn from 'eslint-plugin-unicorn'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  {
    plugins: {
      unicorn,
    },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: [
            // This regex matches dynamic segment files
            // like `[id].tsx` or `[...slug].tsx`.
            /^\[.*\]\..+$/,

            // This is for the uncommon case where a file is named like a route group,
            // e.g., `(marketing).tsx`.
            /^\(.*\)\..+$/,

            // This correctly ignores files that start with an underscore,
            // such as `_app.tsx` or private utility files.
            /^_/,
          ],
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
]

export default eslintConfig
