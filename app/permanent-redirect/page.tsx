import { permanentRedirect, RedirectType } from 'next/navigation'

export default function RedirectToHomePage() {
  console.log('Redirecting...')
  permanentRedirect('/', RedirectType.replace)
}
