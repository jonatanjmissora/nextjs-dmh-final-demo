"use client"

import { useSearchParams, useRouter } from "next/navigation"

export default function InputDashboardSearch({ className, accountId }: { className: string, accountId: string }) {

  const searchParams = useSearchParams()
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const search = event.currentTarget.search.value as string
    const params = new URLSearchParams(searchParams);

    if (search !== "") {
      params.set('search', search);
      params.set("page", "1")
      params.delete('filter');
    } else {
      params.delete('search');
    }
    router.push(`/dashboard/accounts/${accountId}/activity?${params.toString()}`);
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        name="search"
        className={`input-form ${className}`}
        id="search"
        type="text"
        placeholder={"Buscar en tu actividad"}
        defaultValue={searchParams.get('search')?.toString()}
        autoComplete="on"
      />
    </form>
  )
}
