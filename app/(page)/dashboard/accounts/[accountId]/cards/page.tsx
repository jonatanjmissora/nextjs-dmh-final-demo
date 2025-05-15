import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import CardNew from "@/app/components/Dashboard/Cards/CardNew";
import CardsList from "@/app/components/Dashboard/Cards/CardsList";
import { getCookies } from "@/app/helpers/getCookies";
import { cardsDataMock } from "@/app/mock-data/cards-data";
import { CardDataTypes } from "@/app/types/card.types";

export default async function Cards() {

  const [accountId, token] = getCookies("accountid", "token")
  const cardsData: CardDataTypes[] = await cardsDataMock

  return (
    <article className="dashboard-content-container xl:gap-8 xl:py-6">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <span className="link link-border" >Tarjetas</span>
      </div>
      <CardNew accountId={accountId} cardsData={cardsData} />
      <CardsList token={token} accountId={accountId} cardsData={cardsData} />
    </article>
  )
}
