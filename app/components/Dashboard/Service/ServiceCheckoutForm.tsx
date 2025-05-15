"use client"

import { useRouter } from "next/navigation"
import { SubmitForm } from "../../Button/SubmitForm"
import { ServiceDataTypes } from "@/app/types/service.types"
import { useState } from "react"
import { toast } from "sonner"
import { AccountDataTypes, ActivityDataTypes } from "@/app/types/account.types"
import { postTransaction } from "@/app/services/transaction.services"
import { TransactionDataTypes } from "@/app/types/transaction.types"
import { getLocaleDate } from "@/app/helpers/getDateData"
import { intlNumberFormat } from "@/app/helpers/intlNumberFormat"

type PostTransactionResponse = {
  data?: TransactionDataTypes | undefined;
  error?: string | undefined
}

export default function ServiceCheckoutForm({ account, token, service }: { account: AccountDataTypes, token: string, service: ServiceDataTypes }) {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  if (service.invoice_value === 0) service.invoice_value = 1
  const formatedAmount = intlNumberFormat(Number((service.invoice_value * 100).toFixed(2)))

  const [year, month, day, time] = getLocaleDate(new Date().toString())
  const today = `${year}-${month}-${day}T${time}:00.000Z`
  //console.log(today)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    try {

      if (account.available_amount >= service.invoice_value * 100) {
        const newTransaction = {
          amount: -Number((service.invoice_value * 100).toFixed(2)),
          dated: today,
          description: `Pago de ${service.name}`
        }
        const data = { id: "01" }

        //console.log("Nuev pago realizado", data)
        toast.success("Pago correcto")
        router.push(`/dashboard/accounts/${account.id}/service/success?transactionId=${data?.id}`)
        router.refresh();
      }

      else {
        router.push(`/dashboard/accounts/${account.id}/service/payError`)
        toast.error("Fondos insuficientes")
      }
    } catch (error: any) {
      console.error("Error en el pago: ", error.message)
      toast.error(error.message)
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full flex justify-end'
    >
      <SubmitForm className=" card-shadow h-20 sm:h-24 sm:text-3xl w-1/2 xl:w-3/12 xl:text-2xl xl:h-20" text={"Pagar"} isLoading={isLoading} />
    </form>
  )
}
