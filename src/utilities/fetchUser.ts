import { cookies } from 'next/headers'

export async function hasPayloadToken(): Promise<boolean> {
  const cookieStore = cookies()
  return (await cookieStore).has('payload-token')
}
