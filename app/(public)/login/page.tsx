import Link from 'next/link'

export default function LoginPage() {
  return (
    <main>
      <h1>Login</h1>
      <p>This is the login page</p>
      <Link href="/private">Private</Link>
    </main>
  )
}
