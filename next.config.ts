import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  rewrites: async () => [
    {
      source: `/api/:path*`,
      destination: `${process.env.API_BASE_URL}/:path*`,
    },
  ],
}

export default nextConfig
