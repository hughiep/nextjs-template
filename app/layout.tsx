import './globals.css'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import { QueryProvider } from '@/modules/shared/contexts/query'
import Web3Persist from '@/modules/shared/contexts/persist-web3'

export const metadata: Metadata = {
  title: 'App',
  description: 'App description metadata',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Suspense fallback="Loading...">
          <Web3Persist>
            <QueryProvider>{children}</QueryProvider>
          </Web3Persist>
        </Suspense>
      </body>
    </html>
  )
}
