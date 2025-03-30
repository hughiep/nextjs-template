import { z } from 'zod'

export const appMetadataSchema = z.object({
  url: z.string().nonempty(),
})

export const METADATA_CONFIG = {
  url: process.env.NEXT_PUBLIC_APP_URL,
} as const
