"use client"

import { UserDataTypes } from "@/app/types/user.types";
import { useState } from "react";
import ProfileEditEmail from "./ProfileEditFields/ProfileEditEmail";
import ProfileEditFirstname from "./ProfileEditFields/ProfileEditFirstname";
import ProfileEditLastname from "./ProfileEditFields/ProfileEditLastname";
import ProfileEditPhone from "./ProfileEditFields/ProfileEditPhone";

export default function ProfileEditForm({ token, accountId, userData }: { token: string, accountId: string, userData: UserDataTypes }) {

  const [editing, setEditing] = useState<string>("")

  return (
    <div>

      <ProfileEditEmail token={token} accountId={accountId} user={userData} fieldLabel={"Email"} fieldValue={userData.email} editing={editing} setEditing={setEditing} />

      <ProfileEditFirstname token={token} accountId={accountId} user={userData} fieldLabel={"Nombre"} fieldValue={userData.firstname} editing={editing} setEditing={setEditing} />

      <ProfileEditLastname token={token} accountId={accountId} user={userData} fieldLabel={"Apellido"} fieldValue={userData.lastname} editing={editing} setEditing={setEditing} />

      <div className="text-2xl flex flex-wrap justify-between items-center border-b-[1px] border-gray-200 py-2 h-28 sm:flex-row sm:justify-between sm:py-4 xl:text-xl xl:py-1">
        <span className="w-full sm:w-3/12">DNI</span>
        <div className="flex-1 flex justify-between text-gray-600">
          <span className="text-gray-400 px-4">{userData.dni}</span>
        </div>
      </div>

      <ProfileEditPhone token={token} accountId={accountId} user={userData} fieldLabel={"Teléfono"} fieldValue={userData.phone} editing={editing} setEditing={setEditing} />

      <div className="text-2xl flex flex-wrap justify-between items-center border-b-[1px] border-gray-200 py-2 h-28 sm:flex-row sm:justify-between sm:py-4 xl:text-xl xl:py-1">
        <span className="w-full sm:w-3/12">Contraseña</span>
        <div className="flex-1 flex justify-between text-gray-600">
          <span className="text-gray-400 px-4">******</span>
        </div>
      </div>

    </div>
  )
}