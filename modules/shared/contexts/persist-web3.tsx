import { type PropsWithChildren } from 'react'
import { headers } from 'next/headers'
import { Web3Provider } from './web3'

export default async function Web3Persist({ children }: PropsWithChildren) {
  const rqHeaders = await headers()
  const cookies = rqHeaders.get('cookie')

  return <Web3Provider cookies={cookies}>{children}</Web3Provider>
}
