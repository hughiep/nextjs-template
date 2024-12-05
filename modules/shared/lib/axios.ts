import axios from 'axios'
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '../helpers/auth'

const UNAUTHORIZED_STATUS_CODE = 401
const REFRESH_TOKEN_API = '/refresh-token'

/**
 * Indicate wheather or not accessToken is refreshing
 */
let isRefreshing = false

/**
 * When access token is refreshing by refresh token, queue 401 axios requests
 */
let lockedRequestsQueued: {
  request: any
  resolve: (value: any) => void
  reject: (reason?: any) => void
}[] = []

/**
 * After refreshing, resolve or reject requests in queue if there is error or not
 */
const processQueue = () => {
  lockedRequestsQueued.forEach((prom) => {
    if (prom.request._retry) {
      prom.reject(new Error('Token refresh failed'))
    } else {
      prom.resolve(axiosClient(prom.request))
    }
  })

  lockedRequestsQueued = []
}

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 30_000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken()
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  async (error) => {
    const originalRequest = error.config
    const refreshToken = getRefreshToken()

    if (
      refreshToken &&
      !originalRequest?._retry &&
      originalRequest?.url !== REFRESH_TOKEN_API &&
      error.response?.status === UNAUTHORIZED_STATUS_CODE
    ) {
      if (!isRefreshing) {
        isRefreshing = true

        try {
          const tokenData = await refreshAccessToken(refreshToken)
          setAccessToken(tokenData.accessToken)
          setRefreshToken(tokenData.refreshToken)

          isRefreshing = false
          processQueue()
          return await axiosClient(originalRequest)
        } catch (error) {
          isRefreshing = false
          processQueue()
          return Promise.reject(error)
        }
      } else {
        originalRequest._retry = true

        return new Promise((resolve, reject) =>
          lockedRequestsQueued.push({
            request: originalRequest,
            resolve,
            reject,
          }),
        )
      }
    }

    return Promise.reject(error)
  },
)

async function refreshAccessToken(refreshToken: string) {
  const tokenData = await axiosClient.post<
    { refreshToken: string },
    { accessToken: string; refreshToken: string }
  >(REFRESH_TOKEN_API, { refreshToken })

  return tokenData
}
