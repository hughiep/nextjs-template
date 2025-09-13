export class AppError extends Error {
  public readonly code: string
  public readonly statusCode?: number
  public readonly context?: Record<string, unknown>

  constructor(
    message: string,
    {
      code,
      statusCode,
      context,
    }: {
      code: string
      statusCode?: number
      context?: Record<string, unknown>
    },
  ) {
    super(message)
    this.name = 'AppError'
    this.code = code
    this.statusCode = statusCode
    this.context = context
  }

  static isAppError(error: unknown): error is AppError {
    return error instanceof AppError
  }
}

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

  // Wallet errors
  WALLET_CONNECTION_ERROR: 'WALLET_CONNECTION_ERROR',
  WALLET_REJECTED: 'WALLET_REJECTED',

  // Generic errors
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
} as const

export type ErrorCodeType = (typeof ErrorCode)[keyof typeof ErrorCode]
