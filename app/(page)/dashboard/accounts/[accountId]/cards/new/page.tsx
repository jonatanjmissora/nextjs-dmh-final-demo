import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import CardNewForm from '@/app/components/Dashboard/Cards/CardNewForm'
import { getCookies } from '@/app/helpers/getCookies'
import Link from 'next/link'

export default function NewCard() {

  const [token, accountId] = getCookies("token", "accountid")

  return (
    <article className="dashboard-content-container min-h-[85vh]">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/cards`} className="link link-border" >Tarjetas</Link>
      </div>
      <CardNewForm token={token} accountId={accountId} />
    </article>
  )
}
