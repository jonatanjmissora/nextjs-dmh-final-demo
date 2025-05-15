import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import AmountForm from "@/app/components/Dashboard/Deposits/AmountForm";
import { getCookies } from "@/app/helpers/getCookies";
import Link from "next/link";

export default function DepositAmount() {

  const [accountId] = getCookies("accountid")

  return (
    <article className="dashboard-content-container xl:py-16">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/deposits`} className="link link-border" >Cargar dinero</Link>
      </div>
      <AmountForm accountId={accountId} />
    </article>
  )
}
