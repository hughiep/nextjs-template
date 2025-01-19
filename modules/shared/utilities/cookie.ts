import Cookies from 'js-cookie'

/**
 * Client-side cookie storage
 * For server-side, use `next/headers` or `next/cookies`
 */
export const cookieStore = {
  getItem: (key: string) => {
    return Cookies.get(key)
  },
  setItem: (key: string, value: string, options?: Cookies.CookieAttributes) => {
    return Cookies.set(key, value, options)
  },
  removeItem: (key: string) => {
    return Cookies.remove(key)
  },
}
