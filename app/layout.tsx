import './globals.css'

import { Suspense } from 'react'
import type { Metadata } from 'next'

import Provider1 from '@/modules/provider'
import Provider2 from '@/modules/provider2'

export const metadata: Metadata = {
  title: 'App',
  description: 'App description metadata',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Suspense>
          <Provider1>
            <Provider2>{children}</Provider2>
          </Provider1>
        </Suspense>
      </body>
    </html>
  )
}
