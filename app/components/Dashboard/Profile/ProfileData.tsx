import { getCookies } from "@/app/helpers/getCookies"
import { UserDataTypes } from "@/app/types/user.types"
import ProfileEditForm from "./ProfileEditForm"
import { userDataMock } from "@/app/mock-data/user-data"

export default async function ProfileData() {

  const [token, accountId, userId, userName] = getCookies("token", "accountid", "userid", "username")
  const userData: UserDataTypes = await userDataMock

  return (
    <div className="card bg-my-white p-8 py-10 xl:py-4">
      <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 sm:text-4xl sm:border-b-0 xl:text-2xl">Tus datos</h2>

      <ProfileEditForm token={token} accountId={accountId} userData={userData} />

    </div >
  )
}
