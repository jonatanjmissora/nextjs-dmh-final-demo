import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import CardDeleteForm from "@/app/components/Dashboard/Cards/CardDeleteForm";
import CardLib from "@/app/components/Dashboard/Cards/CardLib";
import { getCookies } from "@/app/helpers/getCookies";
import { cardsDataMock } from "@/app/mock-data/cards-data";
import { CardDataTypes } from "@/app/types/card.types";
import Link from "next/link";

const getCardData = (id: number) => {
  return cardsDataMock.filter(card => card.id === id)[0]
}

export default async function CardDelete({ params }: { params: { cardId: string } }) {

  const [token, accountId] = getCookies("token", "accountid")
  const { cardId } = params
  const cardData: CardDataTypes = await getCardData(parseInt(cardId, 10))

  return (
    <article className="dashboard-content-container xl:gap-8 xl:py-20">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/cards`} className="link link-border" >Tarjetas</Link>
      </div>

      <div className="flex flex-col items-center gap-12 sm:items-stretch xl:flex-row xl:items-center">
        <div className='w-full sm:h-full aspect-video xl:w-1/2'>
          <CardLib
            cvc={cardData.cod}
            expiry={cardData.expiration_date}
            name={cardData.first_last_name}
            number={cardData.number_id}
          />
        </div>
        <div className="bg-my-black rounded-xl py-16 px-8 w-full xl:w-1/2 xl:h-full xl:mx-auto">
          <p className="text-white text-3xl pb-8 text-center xl:text-2xl">¿Desea eliminar esta tarjeta?</p>
          <div className="w-full flex gap-4">
            <Link className="button-form card-shadow w-1/2 bg-gray-400" href={`/dashboard/accounts/${accountId}/cards`}>Cancelar</Link>

            <CardDeleteForm token={token} />

          </div>
        </div>
      </div>
    </article>
  )
}
