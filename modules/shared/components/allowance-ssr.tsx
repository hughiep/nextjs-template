import { readContract } from '@wagmi/core'

import { erc20Abi } from 'viem'
import { unstable_cacheTag as cacheTag } from 'next/cache'
import { config } from '../lib/wagmi'

const getAllowance = async () => {
  'use cache'
  cacheTag('allowance')

  return await readContract(config, {
    abi: erc20Abi,
    address: '0xDA06406052267F049E3B7E02bD2B0D20Fa72c8a3',
    functionName: 'allowance',
    args: [
      '0x0e503A5b116D2B7A9eC7f3d7B291C0274d923550', // user address
      '0x726E5DF7e7A08d5Fa06212eA500C26FdBa7ac57a', // spender
    ],
  })
}

export default async function AllowanceBalance() {
  const result = await getAllowance()

  return <p className="px-4">Allowance: {result.toString()}</p>
}
