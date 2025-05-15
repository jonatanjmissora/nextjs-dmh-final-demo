import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import { getCookies } from "@/app/helpers/getCookies";
import Link from "next/link";

export default function ProfileCards() {

  const [accountId] = getCookies("accountid")

  return (
    <Link href={`/dashboard/accounts/${accountId}/cards`} className="text-3xl sm:text-4xl font-bold card bg-primary flex justify-between items-center w-full h-28 sm:h-44 p-8 border xl:text-2xl xl:h-24">
      Gestioná los medios de pago
      <SVGRightArrow className="size-6 sm:size-9 xl:size-7" />
    </Link>
  )
}
