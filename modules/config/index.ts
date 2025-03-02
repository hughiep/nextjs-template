import { API_CONFIG } from './api'
interface Config {
  api: typeof API_CONFIG
}

export const config: Config = {
  api: API_CONFIG,
}
