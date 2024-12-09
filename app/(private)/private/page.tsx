import { unauthorized } from 'next/navigation'

export default function PrivatePage() {
  unauthorized()
  return (
    <div>
      <h1>Private Page</h1>
      <p>This is a private page.</p>
    </div>
  )
}
