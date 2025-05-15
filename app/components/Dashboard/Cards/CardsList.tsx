import { getCardLast4 } from "@/app/helpers/getCardLast4"
import { CardDataTypes } from "@/app/types/card.types"
import Link from "next/link"

type CardsListProps = {
  token: string;
  accountId: string;
  cardsData: CardDataTypes[]
}

export default async function CardsList({ token, accountId, cardsData }: CardsListProps) {

  return (
    <div className="bg-my-white card py-12 px-10 sm:py-20 xl:py-6 xl:px-10">
      <h2 className="text-3xl font-bold border-b border-gray-200 pb-6 xl:text-xl xl:border-b-0">Tus tarjetas</h2>
      {cardsData.length === 0 && <span className="p-4 text-gray-600 text-xl"><i>No existen tarjetas cargadas</i></span>}
      {cardsData.map(card => <CardRow key={card.id} card={card} accountId={accountId} />)}
    </div>
  )
}

const CardRow = ({ card, accountId }: { card: CardDataTypes, accountId: string }) => {

  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-14 sm:py-10 xl:py-5">
      <div className="flex gap-4 items-center">
        <div className="size-10 bg-primary rounded-full"></div>
        <span className="text-2xl font-light xl:text-xl">Terminada en {getCardLast4(card.number_id)}</span>
      </div>
      <Link href={`/dashboard/accounts/${accountId}/cards/${card.id}/delete`} className="text-gray-700 text-xl font-bold sm:text-2xl xl:text-xl">Eliminar</Link>
    </div>
  )
}