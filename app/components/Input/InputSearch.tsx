"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function InputSearch({ className, placeholder, accountId }: { className: string, placeholder: string, accountId: string }) {

  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const actualPathname = pathname.split("/")[4] === "service" ? "service" : "activity"

  const handleChange = useDebouncedCallback((search: string) => {
    const params = new URLSearchParams(searchParams);

    if (search !== "") {
      params.set('search', search);
      params.set("page", "1")
      params.delete('filter');
    } else {
      params.delete('search');
    }
    router.replace(`/dashboard/accounts/${accountId}/${actualPathname}?${params.toString()}`);
  }, 300)

  return (
    <input
      onChange={(e) => handleChange(e.target.value)}
      className={`input-form ${className}`}
      type="text"
      placeholder={placeholder}
      defaultValue={searchParams.get('search')?.toString()}
      autoComplete="on"
    />
  )
}