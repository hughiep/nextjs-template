'use server'

import { cookies } from 'next/headers'

import { httpClient } from '@/shared/services/client'
import { ApiError } from '@/shared/services/error'

/**
 * Get the current user session from request's cookies.
 * @returns the current user session from cookies, or null if not authenticated
 */
export async function getSession() {
  const cookieStore = await cookies()
  const auth = cookieStore.get('auth')
  return auth ? JSON.parse(auth.value) : null
}

export async function revokeAccessToken(): Promise<{
  accessToken: string
  refreshToken: string
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ accessToken: '0x123', refreshToken: '0x123' })
    }, 1000)
  })
}

export async function deleteTokens() {
  const cookieStore = await cookies()
  cookieStore.delete('auth')
  return { success: true }
}

export type LoginData = {
  email: string
  password: string
}

export async function login(data: LoginData) {
  try {
    const { accessToken, refreshToken } = await httpClient.post<{
      accessToken: string
      refreshToken: string
    }>('/auth/login', data)

    // Decode JWT to get expiration time
    const decoded = JSON.parse(
      Buffer.from(refreshToken.split('.')[1], 'base64').toString(),
    )
    const expires = new Date(decoded.exp * 1000) // Convert to milliseconds

    const cookieStore = await cookies()
    // Set refresh token in HttpOnly cookie, refresh api only
    cookieStore.set('session', refreshToken, {
      httpOnly: true,
      path: '/auth/refresh',
      expires,
    })

    // Set access token in non-HttpOnly cookie, accessible from client-side
    // Decode JWT to get expiration time
    const decodedAccessToken = JSON.parse(
      Buffer.from(accessToken.split('.')[1], 'base64').toString(),
    )
    const expiresAccessToken = new Date(decodedAccessToken.exp * 1000) // Convert to milliseconds

    // Set access token in non-HttpOnly cookie, accessible from client-side
    cookieStore.set('idToken', accessToken, {
      httpOnly: false,
      expires: expiresAccessToken,
    })
    return { success: true }
  } catch (error) {
    if (error instanceof ApiError) {
      return { success: false, error: error.message }
    }

    return { success: false, error: 'An unknown error occurred' }
  }
}
