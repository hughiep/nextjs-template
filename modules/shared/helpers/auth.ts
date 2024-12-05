import { storageKeys } from '../constants/storage'

export const getAccessToken = () =>
  window.localStorage.getItem(storageKeys.auth.acessToken)
export const getRefreshToken = () =>
  window.localStorage.getItem(storageKeys.auth.refreshToken)

export const setAccessToken = (accessToken: string) =>
  window.localStorage.set(storageKeys.auth.acessToken, accessToken)

export const setRefreshToken = (refreshToken: string) =>
  window.localStorage.set(storageKeys.auth.refreshToken, refreshToken)
