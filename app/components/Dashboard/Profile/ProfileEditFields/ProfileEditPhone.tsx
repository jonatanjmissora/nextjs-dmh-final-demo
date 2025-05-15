"use client"

import SVGCheck from "@/app/assets/SVG/SVGCheck";
import SVGEdit from "@/app/assets/SVG/SVGEdit";
import SVGPlus from "@/app/assets/SVG/SVGPlus";
import SVGSpinner from "@/app/assets/SVG/SVGSpinner";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { phoneEditSchema } from '@/app/schema/userEdit.schema';
import { PhoneType, UserDataTypes } from '@/app/types/user.types';
import { userEdit } from "@/app/services/user.services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ProfileEditFieldProps = {
  token: string;
  accountId: string;
  user: UserDataTypes;
  fieldLabel: string;
  fieldValue: string;
  editing: string;
  setEditing: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProfileEditPhone({ token, accountId, user, fieldLabel, fieldValue, editing, setEditing }: ProfileEditFieldProps) {

  const router = useRouter()
  const [showEdit, setShowEdit] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
  } = useForm<PhoneType>({
    resolver: yupResolver(phoneEditSchema),
  })

  useEffect(() => {
    editing === fieldLabel
      ? setShowEdit(true)
      : setShowEdit(false)

  }, [editing, fieldLabel, showEdit])

  useEffect(() => {
    if (showEdit) {
      setFocus("phone")
    }
  }, [showEdit, setFocus])

  const handleEdit = () => {
    setEditing(fieldLabel)
    setShowEdit(true)
  }

  const handleCancel = () => {
    setShowEdit(false)
    setEditing("")
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement
    , Element>) => {
    e?.currentTarget.select()
  }

  const onSubmit: SubmitHandler<PhoneType> = async (data) => {

    if (data?.phone !== fieldValue) {

      const userEditData = { ...user, phone: data.phone }
      try {
        const resp = await userEdit(user.id.toString(), userEditData, token)
        //console.log("Respuesta del swagger", { resp })
        if (resp.error) {
          throw new Error(resp.error)
        }

        router.replace(`/dashboard/accounts/${accountId}`)
        router.refresh();
        toast.success("Usuario editado")

      } catch (error) {
        if (error instanceof Error) {
          //console.error("Error de login: ", error.message)
        }
      }
    }

    setShowEdit(false)
    setEditing("")

  }

  return (
    <div className="text-2xl flex items-center border-b-[1px] border-gray-200 h-28 sm:flex-row xl:text-xl">
      <span className="w-full sm:w-3/12">{fieldLabel}</span>
      {showEdit
        ? (
          <form onSubmit={handleSubmit(onSubmit)} className="relative flex-1 text-gray-600">
            <div className='flex gap-8 items-center'>

              <input
                className='border border-black p-0 px-4 m-0 flex-1 h-12 text-2xl font-light'
                {...register("phone")}
                placeholder={`${fieldLabel}*`}
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
                {errors?.phone?.message}
              </i>
            </p>
          </form>

        )
        : (
          <div className="flex-1 flex justify-between text-gray-600">
            <span className="text-gray-400 border border-transparent px-4 text-2xl">{fieldValue}</span>
            <button onClick={handleEdit}>
              <SVGEdit className="size-8 text-gray-400" />
            </button>
          </div>
        )
      }

    </div>
  )

}