import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      Main Layout{' '}
      <nav className="flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
      </nav>{' '}
      <div>{children}</div>
    </div>
  )
}
