import { AppError } from '@/shared/types/error'

export const ErrorCode = {
  // Presale related errors
  CONFIG_NOT_LOADED: 'CONFIG_NOT_LOADED',

  // Auth related errors
  UNAUTHORIZED: 'UNAUTHORIZED',
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  SESSION_EXPIRED: 'SESSION_EXPIRED',

  // Network related errors
  NETWORK_ERROR: 'NETWORK_ERROR',
  REQUEST_TIMEOUT: 'REQUEST_TIMEOUT',
  API_ERROR: 'API_ERROR',

  // Validation errors
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INVALID_INPUT: 'INVALID_INPUT',

  // Generic errors
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
} as const

export type ErrorCodeType = (typeof ErrorCode)[keyof typeof ErrorCode]

export class ApiError extends AppError {}
