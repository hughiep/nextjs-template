'use server'

import { cookies } from 'next/headers'

import { logger } from '@/shared/logger'

import { storageKeys } from './storage'

export const signIn = async (address: `0x${string}`, signature: string) => {
  try {
    logger.info('Signing in user', { address })

    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ address, signature })
      }, 1000)
    })

    logger.info('User signed in successfully', { address })
    return response
  } catch (error) {
    logger.error('Sign in failed', error)
    throw error
  }
}

export async function getTokens() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get(storageKeys.auth.acessToken)
  const refreshToken = cookieStore.get(storageKeys.auth.refreshToken)
  return { accessToken, refreshToken }
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

// Server action to check auth status
export async function getServerSession() {
  const cookieStore = await cookies()
  const auth = cookieStore.get('auth')
  return auth ? JSON.parse(auth.value) : null
}

export async function signOut() {
  const cookieStore = await cookies()
  cookieStore.delete('auth')
  return { success: true }
}
