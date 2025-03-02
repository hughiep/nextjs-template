import './globals.css'

import type { Metadata } from 'next'

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
      <li onClick={() => void 0} />
      <div onClick={() => void 0} role="listitem" />
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
