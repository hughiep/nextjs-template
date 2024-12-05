// TODO: This config can not be used with eslint inspect, it will throw an error

import { fileURLToPath } from 'node:url'
import path from 'node:path'

import eslint from '@eslint/js'
import { fixupPluginRules } from '@eslint/compat'
import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'

/**
 * Plugins
 */
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import importPlugin from 'eslint-plugin-import'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  allConfigs: eslint.configs,
})

/** @type {import("eslint").Linter.Config[]} */
const config = [
  { ignores: ['.next'] },
  ...fixupConfigRules(
    compat.extends('next/typescript', 'next/core-web-vitals'),
  ),
  prettierPlugin,
  {
    plugins: {
      import: fixupPluginRules(importPlugin),
    },
    rules: {
      'import/order': 1,
      'import/newline-after-import': 1,
      'import/no-anonymous-default-export': 1,
    },
  },
]

export default config
