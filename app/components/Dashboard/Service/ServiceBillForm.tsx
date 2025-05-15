"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";

type ServiceBillFormProps = {
  accountId: string;
  serviceId: string;
}

export default function ServiceBillForm({ accountId, serviceId }: ServiceBillFormProps) {

  const router = useRouter()
  const [inputValue, setInputValue] = useState<string>("")

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === "Backspace") {
      setInputValue(prev => prev.slice(0, -1))
    }
    else if (!isNaN(Number(e.key)) && inputValue.length <= 10) setInputValue(prev => prev + e.key)

  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const billNumber = e.currentTarget.billNumber.value
    if (!billNumber || billNumber === "") return
    if (billNumber !== "99999999999") {
      router.push(`/dashboard/accounts/${accountId}/service/${serviceId}/billError`)
    }
    else {
      router.push(`/dashboard/accounts/${accountId}/service/${serviceId}/checkout?cardnum=0`)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-3xl font-bold tracking-widest text-primary pb-8 w-[70%] sm:w-full sm:text-4xl sm:py-8 sm:pb-20 xl:text-3xl xl:pb-12'>Número de cuenta sin el primer 2</h2>
      <input
        className='input-form w-full h-20 sm:h-28 xl:w-1/2 xl:h-20'
        type="text"
        name={'billNumber'}
        value={inputValue}
        onKeyUp={handleKeyUp}
      />
      <p className='pl-6 text-gray-400 xl:pl-0 xl:text-sm'>( coloca 99999999999 para validar )</p>
      <p className='tracking-normal hidden font-light text-gray-300 text-xl p-6 sm:block xl:text-sm xl:px-0'>{"Son 11 números sin espacios, sin el '2' inicial. Agregá ceros adelante si tenés menos."}</p>

      <div className='w-full absolute flex justify-end sm:relative -bottom-[7.5rem] right-0 sm:bottom-0'>

        <button className='button-form card-shadow w-1/2 h-20 sm:h-28 sm:w-full sm:mt-6 xl:w-3/12 xl:h-20' type="submit">Continuar</button>

      </div>
    </form>
  )
}
