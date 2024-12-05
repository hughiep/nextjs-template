import { Suspense } from 'react'
import AllowanceBalance from '@/modules/shared/componenets/allowance-ssr'
import ConnectButton from '@/modules/shared/componenets/connect-button'

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl">Demo AppKit Reown feature</h1>
      <ConnectButton />
      <Suspense fallback={<p>Loading...</p>}>
        <AllowanceBalance />
      </Suspense>
    </main>
  )
}
