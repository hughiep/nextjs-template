import { z } from 'zod'

export const apiConfigSchema = z.object({
  baseUrl: z.string().nonempty(),
})

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
} as const
