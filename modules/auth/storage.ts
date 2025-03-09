/**
 * JWT token key
 */

const ACCESS_TOKEN = 'x-access-token'
const REFRESH_TOKEN = 'x-refresh-token'
const USER_SESSION = 'user'

const auth = {
  acessToken: ACCESS_TOKEN,
  refreshToken: REFRESH_TOKEN,
  user: USER_SESSION,
}

export const storageKeys = {
  auth,
}
