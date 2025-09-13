import axios from 'axios'

import { ApiError, ErrorCode } from '@/shared/services/error'
import { logger } from '@/shared/logger'

const UNAUTHORIZED_STATUS_CODE = 401
const REFRESH_TOKEN_API = '/refresh-token'

export const axiosClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  // Fetch adapter for better compatibility with Next.js (which extends native Fetch API)
  adapter: 'fetch',
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
      throw new ApiError('Network error occurred', {
        code: ErrorCode.NETWORK_ERROR,
        context: { originalUrl: originalRequest?.url },
      })
    }

    // Handle timeout
    if (error.code === 'ECONNABORTED') {
      throw new ApiError('Request timeout', {
        code: ErrorCode.REQUEST_TIMEOUT,
        statusCode: 408,
        context: { originalUrl: originalRequest?.url },
      })
    }

    // Handle unauthorized
    if (
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
    const apiError = new ApiError(
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
