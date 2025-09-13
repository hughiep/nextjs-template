import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex w-full justify-between border-b px-16 py-4">
      <Link href="/">Logo</Link>
      <Link href="/login">Login</Link>
    </nav>
  )
}
