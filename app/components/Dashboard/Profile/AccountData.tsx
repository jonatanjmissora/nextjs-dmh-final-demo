import { getCookies } from "@/app/helpers/getCookies";
import CopyButton from "../../Button/CopyButton";
import { AccountDataTypes } from "@/app/types/account.types";
import AccountAliasEdit from "./ProfileEditFields/AccountAliasEdit";
import { accountDataMock } from "@/app/mock-data/account-data";

export default async function AccountData() {

  const [accountId, token] = getCookies("accountid", "token")
  const accountData: AccountDataTypes = await accountDataMock

  return (
    <div className="bg-my-black card p-8 text-my-white font-light flex flex-col gap-6 sm:gap-20 sm:p-16 xl:p-10 xl:gap-6">
      <p className="text-xl sm:text-2xl xl:text-xl">Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta</p>
      <div className="flex flex-col gap-2 relative xl:gap-0">
        <div className="flex justify-between items-center text-primary">
          <span className="text-3xl font-medium xl:text-2xl">CVU</span>
          <CopyButton value={"CVU"} accountData={accountData} />
        </div>
        <p className="px-4 text-gray-400 text-2xl xl:text-lg">{accountData.cvu}</p>
      </div>

      <hr className="sm:hidden" />

      <div className="flex flex-col gap-2 relative xl:gap-0">
        <div className="flex justify-between items-center text-primary">
          <span className="text-3xl font-medium xl:text-2xl">Alias</span>
          <CopyButton value={"Alias"} accountData={accountData} />
        </div>

        <AccountAliasEdit token={token} accountId={accountId} fieldValue={accountData.alias} />
      </div>

    </div>
  )
}
