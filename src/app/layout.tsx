import './globals.css'

import 'src/config'

import type { Metadata } from 'next'

import QueryProvider from '@/shared/contexts/react-query'
import { Toaster } from '@/shared/components/ui/toast'

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
        <QueryProvider>{children}</QueryProvider>
        <Toaster />
      </body>
    </html>
  )
}
