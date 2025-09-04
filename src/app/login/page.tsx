import { LoginForm } from '@/auth/components/login-form'

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-[url('/login-background.webp')] bg-cover bg-no-repeat p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}
