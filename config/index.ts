import { z } from 'zod'

import { API_CONFIG, apiConfigSchema } from './api'
import { appMetadataSchema, METADATA_CONFIG } from './metadata'

const configSchema = z.object({
  metadata: appMetadataSchema,
  api: apiConfigSchema,
})

export const config = {
  api: API_CONFIG,
  metadata: METADATA_CONFIG,
} as const

const validateConfig = () => {
  try {
    configSchema.parse(config)
  } catch (error) {
    console.error('Environment variable config failed', error)
  }
}

validateConfig()
