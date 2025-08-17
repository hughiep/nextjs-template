import axios from 'axios'

import { logger } from '@/shared/logger'
import { AppError, ErrorCode } from '@/shared/types/error'
import { getTokens } from '@/auth/services'

const UNAUTHORIZED_STATUS_CODE = 401
const REFRESH_TOKEN_API = '/refresh-token'

export const axiosClient = axios.create({
  adapter: axios.defaults.adapter,
  timeout: 30_000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  async (error) => {
    const originalRequest = error.config

    // Handle network errors
    if (!error.response) {
      throw new AppError('Network error occurred', {
        code: ErrorCode.NETWORK_ERROR,
        context: { originalUrl: originalRequest?.url },
      })
    }

    // Handle timeout
    if (error.code === 'ECONNABORTED') {
      throw new AppError('Request timeout', {
        code: ErrorCode.REQUEST_TIMEOUT,
        statusCode: 408,
        context: { originalUrl: originalRequest?.url },
      })
    }

    const { refreshToken } = await getTokens()

    // Handle unauthorized
    if (
      refreshToken &&
      !originalRequest?._retry &&
      originalRequest?.url !== REFRESH_TOKEN_API &&
      error.response?.status === UNAUTHORIZED_STATUS_CODE
    ) {
      // if (!isRefreshing) {
      //   isRefreshing = true
      //   try {
      //     await revokeAccessToken()
      //     isRefreshing = false
      //     processQueue()
      //     return axiosClient(originalRequest)
      //   } catch {
      //     isRefreshing = false
      //     processQueue()
      //     throw new AppError('Session expired', {
      //       code: ErrorCode.SESSION_EXPIRED,
      //       statusCode: 401,
      //       context: { url: error.config.url },
      //     })
      //   }
      // }
      // return new Promise((resolve, reject) =>
      //   lockedRequestsQueued.push({
      //     request: originalRequest,
      //     resolve,
      //     reject,
      //   }),
      // )
    }

    // Handle API errors
    const apiError = new AppError(
      error.response?.data?.message || 'API Error',
      {
        code: ErrorCode.API_ERROR,
        statusCode: error.response?.status,
        context: {
          originalUrl: originalRequest?.url,
          responseData: error.response?.data,
        },
      },
    )

    logger.error('API Error', apiError)
    throw apiError
  },
)
