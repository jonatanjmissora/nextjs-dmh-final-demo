import { cookies } from "next/headers"

export const getCookies = (...cookiesName: string[]) => {
  return cookiesName.map(cookieName => cookies().get(cookieName)?.value ?? "")
}