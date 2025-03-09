import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/a">A Link</Link>
        <Link href="/connect">Connect Link</Link>
      </nav>
      <div>{children}</div>
    </>
  )
}
