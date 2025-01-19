import { API_CONFIG } from './api'
import { CONTRACTS } from './contract'
import { NETWORK } from './network'

interface Config {
  api: typeof API_CONFIG
  contracts: typeof CONTRACTS
  network: typeof NETWORK
}

export const config: Config = {
  api: API_CONFIG,
  contracts: CONTRACTS,
  network: NETWORK,
}
