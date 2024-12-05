'use client'

import { useState } from 'react'
import { useSignMessage, useWriteContract } from 'wagmi'
import { erc20Abi } from 'viem'
import { useRouter } from 'next/navigation'
import { waitForTransactionReceipt } from '@wagmi/core'
import { config } from '../lib/wagmi'
import { revalidate } from '../lib/revalidate'
import { Button } from './ui/button'

export default function ConnectButton() {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const { signMessageAsync, isPending: isSignning } = useSignMessage()

  /**
   *
   */
  const { writeContractAsync, isPending } = useWriteContract()

  const approveToken = async () => {
    const hash = await writeContractAsync({
      address: '0xDA06406052267F049E3B7E02bD2B0D20Fa72c8a3',
      abi: erc20Abi,
      functionName: 'approve',
      args: [
        '0x726E5DF7e7A08d5Fa06212eA500C26FdBa7ac57a',
        BigInt(1000000000000000000),
      ],
    })

    await waitForTransactionReceipt(config, {
      hash,
    })
    console.log('---Done')
    revalidate('allowance')
  }

  return (
    <div className="flex flex-col items-start gap-2 p-4">
      <h2 className="font-bold">Connect wallet</h2>
      <appkit-button />
      <hr className="w-full border-gray-500" />
      <h2 className="font-bold">Sign message</h2>
      <Button
        variant="outline"
        onClick={() =>
          signMessageAsync({ message: 'hello world' })
            .then(setMessage)
            .catch((err) => setError(err.message))
        }
      >
        {isSignning ? 'Loading...' : 'Sign message'}
      </Button>
      <p>Signed message: {message}</p>
      <p>Signing error: {error}</p>
      <hr className="w-full border-gray-500" />
      <h2 className="font-bold">Interact with contract</h2>
      <Button variant="outline" onClick={() => approveToken()}>
        {isPending ? 'Loading...' : 'Approve token'}
      </Button>
    </div>
  )
}
