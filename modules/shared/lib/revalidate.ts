import { revalidateTag } from 'next/cache'

export const revalidate = async (tag: string) => {
  'use server'
  revalidateTag(tag)
}
