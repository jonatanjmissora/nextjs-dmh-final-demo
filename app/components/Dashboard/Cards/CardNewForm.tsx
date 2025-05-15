"use client"

import { FormProvider, SubmitHandler, useForm, useWatch } from "react-hook-form";
import CardLib from "./CardLib";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { newCardSchema } from "@/app/schema/newCard.schema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CardDataTypes, CardFormDataType } from "@/app/types/card.types";
import SVGSpinner from "@/app/assets/SVG/SVGSpinner";
import { checkEmptyInputs } from "@/app/helpers/checkEmptyInputs";
import ControlledInputForm from "../../Input/ControlledInputForm";


export default function CardNewForm({ token, accountId }: { token: string, accountId: string }) {

  const router = useRouter()

  const newCardFormMethods = useForm<CardFormDataType>({
    resolver: yupResolver(newCardSchema),
  });

  const {
    handleSubmit,
    setFocus,
    control,
    formState: { errors, isSubmitting },
  } = newCardFormMethods

  const [serverError, setServerError] = useState<string>("")
  const [actualFocus, setActualFocus] = useState<string>("number")

  useEffect(() => {
    setFocus("number")
  }, [setFocus])

  const onSubmit: SubmitHandler<CardFormDataType> = async (data) => {
    // const newCard = {
    //   cod: +data.cvc,
    //   expiration_date: data.expiry,
    //   first_last_name: data.name,
    //   number_id: +data.number,
    // }
    // try {
    //   setServerError("")
    //   const { data, error }: PostCardResponse = await postCard(accountId, newCard, token)
    //   if (error) throw new Error(error)

    //   //console.log("Nueva tarjeta creada", data)
    toast.success("Tarjeta adherida correctamente")
    router.push(`/dashboard/accounts/${accountId}/cards`)
    router.refresh();

    // } catch (error) {
    //   if (error instanceof Error) {
    //     let actualError = error.message
    //     if (error.message === badCardExpiryFormat) {
    //       actualError = spanishBadCardExpiryFormat
    //     }
    //     console.error("Error en crear tarjeta nueva: ", actualError)
    //     setServerError(actualError)
    //   }
    // }
  }

  const [
    cardLibNumber,
    cardLibName,
    cardLibExpiry,
    cardLibCvc,
  ] = useWatch({
    control,
    name: ["number", "name", "expiry", "cvc"]
  })

  const emptyInputs = checkEmptyInputs(cardLibNumber, cardLibName, cardLibExpiry, cardLibCvc)

  return (
    <div className="relative pb-20 bg-my-white card flex flex-col items-center justify-center p-10 sm:py-20 sm:px-40 xl:py-10 xl:pb-16">
      <div className='w-full aspect-video xl:w-[300px]'>
        <CardLib
          number={cardLibNumber && Number(cardLibNumber) || NaN}
          name={cardLibName && cardLibName.substring(0, 17) || ""}
          expiry={cardLibExpiry && (cardLibExpiry.substring(0, 4)) || ""}
          cvc={cardLibCvc && Number(cardLibCvc.substring(0, 3)) || NaN}
          focus={actualFocus}
        />
      </div>
      <FormProvider {...newCardFormMethods} >
        <form className='pt-12 flex flex-col justify-center items-center gap-8 w-full mx-auto' onSubmit={handleSubmit(onSubmit)}>

          <div className='w-full flex flex-col gap-8 xl:flex-row xl:gap-x-20'>

            <div className='w-full flex flex-col gap-8'>

              <ControlledInputForm
                className="card"
                label={"number"}
                placeholder={"Número de tarjeta*"}
                type={"text"}
                setActualFocus={setActualFocus}
                error={errors.number?.message || ""}
              />

              <ControlledInputForm
                className="card"
                label={"name"}
                placeholder={"Nombre del titular*"}
                type={"text"}
                setActualFocus={setActualFocus}
                error={errors.name?.message || ""}
              />
            </div>

            <div className='w-full flex flex-col gap-8 sm:flex-row sm:gap-5 xl:flex-col xl:gap-8'>
              <ControlledInputForm
                className="card input-nolinebreak sm:input-linebreak xl:input-nolinebreak"
                label={"expiry"}
                placeholder={"Fecha de expiración*"}
                type={"text"}
                setActualFocus={setActualFocus}
                error={errors.expiry?.message || ""}
              />

              <ControlledInputForm
                className="card input-nolinebreak sm:input-linebreak xl:input-nolinebreak"
                label={"cvc"}
                placeholder={"Código de seguridad*"}
                type={"text"}
                setActualFocus={setActualFocus}
                error={errors.cvc?.message || ""}
              />
            </div>

          </div>

          <div className='w-full flex xl:gap-20'>
            <div className='hidden xl:flex xl:flex-1'></div>
            <button
              className={`flex-1 button-form ${emptyInputs && "bg-my-grey-light"}`}
              type="submit"
              disabled={emptyInputs}
            >
              {isSubmitting ? <SVGSpinner className="size-9 text-primary" /> : "Continuar"}
            </button>

          </div>

        </form>
      </FormProvider>
      <p className="px-4 absolute bottom-4 text-my-red-error text-xl text-center w-full tracking-wide pt-4 sm:bottom-6 xl:text-base">
        <i>
          {
            errors?.number?.message ||
            errors?.name?.message ||
            errors?.expiry?.message ||
            errors?.cvc?.message ||
            serverError
          }

        </i></p>
    </div>
  )
}
