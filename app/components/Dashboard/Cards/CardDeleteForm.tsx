"use client"

import { useParams, useRouter } from "next/navigation"
import { toast } from "sonner"
import { SubmitForm } from "../../Button/SubmitForm"
import { useState } from "react"

export default function CardDeleteForm({ token }: { token: string }) {

  const router = useRouter()
  const { accountId, cardId }: { accountId: string, cardId: string } = useParams()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const submit = async () => {
    setIsLoading(true)
    try {
      router.push(`/dashboard/accounts/${accountId}/cards`)
      router.refresh();
      toast.success("Tarjeta eliminada")
    }
    catch (error) {
      // if (error instanceof Error)
      //console.log(error.message)
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="w-1/2" action={submit}>
      <SubmitForm text={"Eliminar"} isLoading={isLoading} />
    </form>
  )
}
