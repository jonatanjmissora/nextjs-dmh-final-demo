import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import CopyButton from "@/app/components/Button/CopyButton";
import { getCookies } from "@/app/helpers/getCookies";
import { accountDataMock } from "@/app/mock-data/account-data";
import { AccountDataTypes } from "@/app/types/account.types";
import Link from "next/link";
import { toast } from "sonner";

export default async function DepositBank() {

  const [token, accountId] = getCookies("token", "accountid")
  const accountData: AccountDataTypes = await accountDataMock

  return (
    <article className="dashboard-content-container xl:py-20">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/deposits`} className="link link-border" >Cargar dinero</Link>
      </div>

      <div className="flex flex-col gap-8 text-white bg-my-black rounded-xl p-12 sm:py-20 xl:py-12 xl:gap-6">
        <p className="text-2xl pb-8 sm:text-3xl xl:text-xl xl:pb-0">Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta</p>

        <div className="flex justify-between relative">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-primary xl:text-xl">CVU</span>
            <span className="text-gray-300 text-2xl xl:text-xl">{accountData.cvu}</span>
          </div>

          <CopyButton
            value={"CVU"}
            accountData={accountData}
            redirectURL={`/dashboard/accounts/${accountId}/deposits/amount?account=${accountData.cvu}`}
          />
        </div>

        <hr className="sm:w-0" />

        <div className="flex justify-between relative">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-primary xl:text-xl">Alias</span>
            <span className="text-gray-300 text-2xl xl:text-xl">{accountData.alias}</span>
          </div>

          <CopyButton
            value={"Alias"}
            accountData={accountData}
            redirectURL={`/dashboard/accounts/${accountId}/deposits/amount?account=${accountData.alias}`}
          />
        </div>


      </div>
    </article>
  )
}
