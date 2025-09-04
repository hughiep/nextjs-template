import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  console.log('Middleware running for:', req.url)
  // if (req.nextUrl.pathname.startsWith('/api')) {
  //   // Skip middleware for API routes
  //   return NextResponse.json({ message: 'API route' })
  // }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
