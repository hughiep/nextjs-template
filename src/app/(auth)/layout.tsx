export default function AuthPagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-[url('/login-background.webp')] bg-cover bg-no-repeat p-6 md:p-10">
      {children}
    </div>
  )
}
