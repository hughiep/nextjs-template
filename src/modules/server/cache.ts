/**
 * Server utilities
 *
 * @module shared/utilities/server
 */

'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
/**
 * Invalidate server-side cache as a server action
 */
export const revalidatePathServerFn = async (path: string) => {
  return revalidatePath(path)
}

/**
 * Invalidate server-side cache as a server action
 */
export const revalidateTagServerFn = async (tag: string) => {
  return revalidateTag(tag)
}
