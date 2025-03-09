'use client'

import { useEffect } from 'react'

export default function ClientPage() {
  useEffect(() => {
    throw new Error('Client Error')
  }, [])

  return 'Client'
}
