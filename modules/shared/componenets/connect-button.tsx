'use client'

import { useState } from 'react'
import { useSignMessage } from 'wagmi'

export default function ConnectButton() {
  const [message, setMessage] = useState('')
  const { signMessageAsync } = useSignMessage()

  return (
    <>
      <button
        type="button"
        onClick={() =>
          signMessageAsync({ message: 'hello world' }).then(setMessage)
        }
      >
        Sign message
      </button>
      <appkit-button />
      <hr />
      <p>Message: {message}</p>
    </>
  )
}
