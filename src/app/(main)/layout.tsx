import Navbar from '../../modules/shared/layouts/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}
