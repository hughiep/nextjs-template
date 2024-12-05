class APIError extends Error {
  code: string
  cause: Error

  constructor(message: string, code: string, cause: Error) {
    super(message)
    this.name = 'APIError'
    this.message = message
    this.code = code
    this.cause = cause
  }
}

const handleError = (error: Error) => {
  if (error instanceof APIError) {
    console.error(`Unhandled API Error:`, error)
  } else {
    console.error(`Unhandled Application Error:`, error)
  }
}

window.onerror = (_message, _source, _lineno, _colno, error) => {
  if (error) handleError(error)
  return false
}

export { APIError, handleError }
