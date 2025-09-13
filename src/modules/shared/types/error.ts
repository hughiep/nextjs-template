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
