"use client"

import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { amountSchema } from "@/app/schema/transfAmount.schema";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type AmountDataType = {
  amount: string;
}

export default function AmountForm({ accountId }: { accountId: string }) {

  const searchParams = useSearchParams()
  const router = useRouter()

  const amount = searchParams.get('amount')
  const cardnum = searchParams.get('cardnum')
  const account = searchParams.get('account')

  const {
    handleSubmit,
    setFocus,
    register,
    formState: { errors },
    control,
  } = useForm<AmountDataType>({
    resolver: yupResolver(amountSchema),
  });

  useEffect(() => {
    setFocus("amount")
  }, [setFocus])

  const onSubmit: SubmitHandler<AmountDataType> = (data) => {
    const formatedAmount = Number(Number(data.amount.replace(",", ".")).toFixed(2))
    if (formatedAmount === 0) return
    if (account)
      router.push(`/dashboard/accounts/${accountId}/deposits/checkout?account=${account}&amount=${formatedAmount}`)
    else
      router.push(`/dashboard/accounts/${accountId}/deposits/checkout?cardnum=${cardnum}&amount=${formatedAmount}`)
  }

  const [amountValue] = useWatch({ control, name: ["amount"] })
  const emptyInput = amountValue === undefined || amountValue === ""

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative bg-my-black rounded-xl p-8 py-12 pb-20 flex flex-col gap-8 sm:p-12 sm:pb-20 xl:py-12 xl:pb-16 xl:gap-2">
      <p className="text-4xl text-primary font-bold tracking-wider w-10/12 sm:pb-8 xl:text-3xl">¿Cuánto querés ingresar a la cuenta</p>
      <div className="relative xl:w-5/12">
        <span className="text-gray-600 absolute left-5 top-6 text-2xl">$</span>
        <input
          className="input-form h-20 w-full pl-10"
          defaultValue={amount || ""}
          type="text"
          {...register("amount")}
        />
      </div>

      <div className="w-full flex justify-end absolute -bottom-[7.5rem] right-0 sm:relative sm:bottom-0">
        <button
          className={`w-5/12 button-form card-shadow sm:w-full xl:w-3/12 ${emptyInput && "bg-my-grey-light"}`}
          type="submit"
        >
          Continuar
        </button>
      </div>

      <p className="text-my-red-error text-2xl text-center w-full tracking-wide absolute left-0 bottom-6 sm:h-16 sm:top-[85%] sm:left-[0%] xl:text-left xl:top-[65px] xl:w-8/12 xl:left-[5px]">
        <i>
          {errors.amount?.message}
        </i>
      </p>

    </form>
  )
}