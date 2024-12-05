// config/index.tsx

import { cookieStorage, createStorage } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { seiTestnet } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = 'b5e2b0bbfc57af1cde0a38ba102a002f'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [seiTestnet]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
})

export const config = wagmiAdapter.wagmiConfig
