export const login = async (email: string, password: string) => {
  // Simulate a login API call
  if (email === 'user@example.com' && password === 'password') {
    return {
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token',
    }
  }
  throw new Error('Invalid credentials')
}
