import SVGEdit2 from "@/app/assets/SVG/SVGEdit2";
import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import DepositForm from "@/app/components/Dashboard/Deposits/DepositForm";
import { getCardLast4 } from "@/app/helpers/getCardLast4";
import { getCookies } from "@/app/helpers/getCookies";
import { intlNumberFormat } from "@/app/helpers/intlNumberFormat";
import { cardsDataMock } from "@/app/mock-data/cards-data";
import { CardDataTypes } from "@/app/types/card.types";
import Link from "next/link";

export default async function DepositCheckout({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

  const [accountId, token] = getCookies("accountid", "token")
  const amount = searchParams.amount ?? ""
  const cardnum = searchParams.cardnum ?? ""
  const account = searchParams.account ?? ""

  const formatedAmount = intlNumberFormat(+amount)

  let editParam, origin
  if (account) {
    editParam = `/dashboard/accounts/${accountId}/deposits/amount?account=${account}&amount=${amount}`
    origin = account
  }
  else {
    editParam = `/dashboard/accounts/${accountId}/deposits/amount?cardnum=${cardnum}&amount=${amount}`
    const cardsData: CardDataTypes[] = await cardsDataMock
    const actualCardNumber = cardsData[+cardnum].number_id
    origin = "************" + getCardLast4(actualCardNumber)
  }

  return (
    <article className="dashboard-content-container xl:py-20">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/deposits`} className="link link-border" >Cargar dinero</Link>
      </div>

      <div className="relative flex flex-col gap-12 text-white bg-my-black rounded-xl p-12 sm:py-12 xl:py-12 xl:gap-6 xl:pb-20">

        <h2 className="text-3xl text-primary font-bold sm:px-10 xl:text-2xl">Revisá que está todo bien</h2>

        <hr className="text-gray-600 sm:hidden" />

        <div className="flex flex-col gap-2 sm:px-10">
          <div className="flex items-center gap-6">
            <span className="text-2xl opacity-75 xl:text-xl">Vas a transferir</span>
            <Link href={editParam}>
              <SVGEdit2 />
            </Link>
          </div>
          <span className="text-2xl font-bold xl:text-xl">$ {formatedAmount}</span>
        </div>

        <div className="flex flex-col gap-2 sm:px-10">
          <p className="text-xl opacity-75 xl:text-base">Para</p>
          <p className="text-3xl font-bold xl:text-2xl">Cuenta propia</p>
        </div>

        <div className="opacity-75 flex flex-col gap-2 sm:px-10">
          <p className="text-xl">{account !== "" ? "Bank" : "Tarjeta"}</p>
          <p className="text-base">{origin}</p>
        </div>

        <DepositForm deposit={{
          amount: +amount,
          destination: "cuenta propia",
          origin: origin as string,
        }} accountId={accountId} token={token} />
      </div>
    </article>
  )
}
