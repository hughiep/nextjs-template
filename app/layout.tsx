import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'App',
  description: 'App description',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
