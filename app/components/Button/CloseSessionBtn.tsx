"use client"

import { logout } from "@/app/services/auth.services"
import { useRouter } from "next/navigation";

export default function CloseSessionBtn() {

  const router = useRouter();

  const handleClick = async () => {
    try {
      await logout()

    } catch (error) {
      if (error instanceof Error) {
        //console.log("Error de logout: ", error.message)
      }
    }
    finally {
      router.push("/")
      router.refresh();
    }
  }

  return (
    <button
      className='w-max text-gray-600'
      onClick={handleClick}
    >
      Cerrar sesión
    </button>
  )
}
