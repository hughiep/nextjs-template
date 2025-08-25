type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LoggerOptions {
  level?: LogLevel
  prefix?: string
  enabled?: boolean
}

interface LogEntry {
  timestamp: string
  level: LogLevel
  message: string
  data?: unknown
  error?: Error
}

class Logger {
  private readonly level: LogLevel
  private readonly prefix: string
  private readonly enabled: boolean
  private static instance: Logger

  constructor(options: LoggerOptions = {}) {
    this.level = options.level ?? 'info'
    this.prefix = options.prefix ?? ''
    this.enabled = options.enabled ?? process.env.NODE_ENV !== 'production'
  }

  static getInstance(options?: LoggerOptions): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger(options)
    }
    return Logger.instance
  }

  private shouldLog(level: LogLevel): boolean {
    if (!this.enabled) return false

    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error']
    return levels.indexOf(level) >= levels.indexOf(this.level)
  }

  private formatMessage(entry: LogEntry): string {
    const prefix = this.prefix ? `[${this.prefix}] ` : ''
    return `${prefix}${entry.timestamp} [${entry.level.toUpperCase()}] ${entry.message}`
  }

  private createLogEntry(
    level: LogLevel,
    message: string,
    data?: unknown,
    error?: Error,
  ): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      error,
    }
  }

  private log(entry: LogEntry): void {
    if (!this.shouldLog(entry.level)) return

    const formattedMessage = this.formatMessage(entry)

    switch (entry.level) {
      case 'debug':
        console.debug(formattedMessage, entry.data || '')
        break
      case 'info':
        console.info(formattedMessage, entry.data || '')
        break
      case 'warn':
        console.warn(formattedMessage, entry.data || '')
        break
      case 'error':
        console.error(formattedMessage, entry.error || entry.data || '')
        break
    }

    // You could add here:
    // - Log persistence
    // - Error tracking service integration (Sentry, etc.)
    // - Analytics
    this.persistLog(entry)
  }

  private persistLog(entry: LogEntry): void {
    if (entry.level === 'error') {
      // Example: Send to error tracking service
      // await this.sendToErrorTracking(entry)
    }

    // Example: Store in localStorage for debugging
    if (typeof window !== 'undefined') {
      const logs = JSON.parse(localStorage.getItem('app_logs') ?? '[]')
      logs.push(entry)
      // Keep only last 100 logs
      localStorage.setItem('app_logs', JSON.stringify(logs.slice(-100)))
    }
  }

  debug(message: string, data?: unknown): void {
    this.log(this.createLogEntry('debug', message, data))
  }

  info(message: string, data?: unknown): void {
    this.log(this.createLogEntry('info', message, data))
  }

  warn(message: string, data?: unknown): void {
    this.log(this.createLogEntry('warn', message, data))
  }

  error(message: string, error?: unknown): void {
    this.log(this.createLogEntry('error', message, undefined, error as Error))
  }

  // Utility method to get logs (useful for debugging)
  getLogs(): LogEntry[] {
    if (typeof window === 'undefined') return []
    return JSON.parse(localStorage.getItem('app_logs') ?? '[]')
  }

  // Method to clear logs
  clearLogs(): void {
    if (typeof window === 'undefined') return
    localStorage.removeItem('app_logs')
  }
}

// Export a singleton instance
export const logger = Logger.getInstance({
  level: (process.env.NEXT_PUBLIC_LOG_LEVEL as LogLevel) || 'info',
  prefix: 'App',
  enabled: process.env.NODE_ENV !== 'production',
})

// Export the class for custom instances
export { Logger }
export type { LogLevel, LoggerOptions, LogEntry }
