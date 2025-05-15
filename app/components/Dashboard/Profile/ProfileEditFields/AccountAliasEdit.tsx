"use client"

import SVGCheck from "@/app/assets/SVG/SVGCheck"
import SVGEdit from "@/app/assets/SVG/SVGEdit"
import SVGPlus from "@/app/assets/SVG/SVGPlus"
import SVGSpinner from "@/app/assets/SVG/SVGSpinner"
import { aliasEditSchema } from "@/app/schema/accountEdit.schema"
import { editAlias } from "@/app/services/account.services"
import { AliasType } from "@/app/types/account.types"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"

type AliasEditFieldProps = {
  token: string;
  accountId: string;
  fieldValue: string;
}

export default function AccountAliasEdit({ token, accountId, fieldValue }: AliasEditFieldProps) {

  const router = useRouter()
  const [showEdit, setShowEdit] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
  } = useForm<AliasType>({
    resolver: yupResolver(aliasEditSchema),
  })

  useEffect(() => {
    if (showEdit) {
      setFocus("alias")
    }
  }, [showEdit, setFocus])

  const handleEdit = () => {
    setShowEdit(true)
  }

  const handleCancel = () => {
    setShowEdit(false)
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement
    , Element>) => {
    e?.currentTarget.select()
  }

  const onSubmit: SubmitHandler<AliasType> = async (data) => {

    const newData = { alias: data.alias.toUpperCase() }
    if (newData.alias !== fieldValue) {

      try {
        const resp = editAlias(accountId.toString(), newData, token)
        //console.log("Respuesta del swagger", { resp })
        if (!resp) {
          throw new Error("server error")
        }

        router.push(`/dashboard/accounts/${accountId}`)
        router.refresh();
        toast.success("Alias editada")

      } catch (error) {
        if (error instanceof Error) {
          console.error("Error de edicion: ", error.message)
        }
      }
    }

    setShowEdit(false)

  }

  return (
    <div className="w-max">
      {showEdit
        ? (
          <form onSubmit={handleSubmit(onSubmit)} className="relative flex-1 text-gray-600">
            <div className='flex gap-8 items-center'>

              <input
                className='border border-grey-500 p-0 px-4 m-0 flex-1 h-12 w-[27rem] font-light text-[1.4rem] bg-transparent text-my-grey-light xl:text-lg'
                {...register("alias")}
                placeholder={`Alias*`}
                type="text"
                defaultValue={fieldValue}
                onFocus={(e) => handleFocus(e)}
              />


              {isSubmitting
                ? (<SVGSpinner className="size-8 mx-12 text-primary" />)
                : (
                  <div className="flex justify-between items-center gap-2">

                    <button className="" type="submit">
                      <SVGCheck className="size-10 text-green-700" />
                    </button>
                    <button className="ml-2" type="button" onClick={handleCancel}>
                      <SVGPlus className="size-10 rotate-45 text-red-700" />
                    </button>
                  </div>
                )
              }
            </div>

            <p className="text-my-red-error text-xl text-center absolute -bottom-8 w-full">
              <i>
                {errors?.alias?.message}
              </i>
            </p>
          </form>

        )
        : (
          <div className="flex-1 flex justify-between items-center gap-4 text-gray-400 h-12">
            <span className="px-4 text-[1.4rem] xl:text-lg">{fieldValue}</span>
            <button onClick={handleEdit}>
              <SVGEdit className="size-8 text-gray-400" />
            </button>
          </div>
        )
      }

    </div>

  )

}
