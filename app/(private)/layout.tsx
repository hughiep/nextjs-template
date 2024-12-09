import { PropsWithChildren } from 'react'

export default function PrivateLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <h1>Private Layout</h1>
      {children}
    </div>
  )
}
