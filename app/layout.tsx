import './globals.css'
import '@/config'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'App',
  description: 'App description metadata',
}

export default function RootLayout({
  children,
  login,
}: Readonly<{
  children: React.ReactNode
  login: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        Layout
        {login}
      </body>
    </html>
  )
}
