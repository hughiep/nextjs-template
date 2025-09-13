import { redirect } from 'next/navigation'

import { getServerSession } from '@/auth/services'

export default async function Page() {
  const session = await getServerSession()
  if (!session) {
    redirect('/login')
  }

  return 'Profile page'
}
