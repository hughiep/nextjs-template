import { http, createConfig } from 'wagmi'
import { bsc, bscTestnet } from 'wagmi/chains'

const SUPPORTED_CHAIN =
  process.env.NEXT_PULIB_APP_ENV === 'production' ? bsc : bscTestnet

// https://viem.sh/docs/clients/transports/http
const transports: Record<number, ReturnType<typeof http>> = {
  [SUPPORTED_CHAIN.id]: http(process.env.NEXT_PULBIC_RPC_URL),
}

export const config = createConfig({
  chains: [SUPPORTED_CHAIN],
  transports,
})
