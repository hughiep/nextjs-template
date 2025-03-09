'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import { Button } from '@/modules/shared/components/ui/button'

export default function Routing() {
  // window history
  const searchParams = useSearchParams()

  useEffect(() => {
    console.log('render')
  })

  const [data, setData] = useState(0)

  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }

  return (
    <>
      <Button type="button" onClick={() => updateSorting('asc')}>
        Sort Ascending - {searchParams.get('sort')}
      </Button>
      <Button type="button" onClick={() => updateSorting('desc')}>
        Sort Descending - {searchParams.get('sort')}
      </Button>
      <Button type="button" onClick={() => setData((prev) => prev + 1)}>
        Data {data}
      </Button>
      <Link href="/a">To A</Link>
    </>
  )
}
