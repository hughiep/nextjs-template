import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    reactCompiler: true,
  },
  typedRoutes: true,
  // rewrites: async () => [
  //   {
  //     source: `/api/:path*`,
  //     destination: `${process.env.API_BASE_URL}/:path*`,
  //   },
  // ],
}

export default nextConfig
