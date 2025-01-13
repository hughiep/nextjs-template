import { CONTRACTS } from './contract'
import { NETWORK } from './network'

interface Config {
  contracts: typeof CONTRACTS
  network: typeof NETWORK
}

export const config: Config = {
  contracts: CONTRACTS,
  network: NETWORK,
}
