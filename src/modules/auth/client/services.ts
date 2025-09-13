import { httpClient } from '@/shared/services/client'

export type SignUpData = {
  name: string
  email: string
  password: string
}

export async function signUp(data: SignUpData) {
  return await httpClient.post('/auth/register', data)
}
