import SVGCard from "@/app/assets/SVG/SVGCard";
import SVGProfile from "@/app/assets/SVG/SVGProfile";
import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import { getCookies } from "@/app/helpers/getCookies";
import Link from "next/link";

export default function Deposits() {

  const [accountId] = getCookies("accountid")

  return (
    <article className="dashboard-content-container xl:py-20">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <span className="link link-border" >Cargar dinero</span>
      </div>

      <Link href={`/dashboard/accounts/${accountId}/deposits/bank`} className="flex justify-between items-center text-primary bg-my-black p-10 py-14 rounded-xl sm:py-24 xl:py-16">
        <div className="flex items-center gap-8 xl:gap-4">
          <SVGProfile />
          <span className="flex-wrap text-[2rem] font-bold tracking-wider w-[15ch] leading-tight sm:w-max xl:text-2xl">Transferencia bancaria</span>
        </div>
        <SVGRightArrow />
      </Link>

      <Link href={`/dashboard/accounts/${accountId}/deposits/card?cardnum=0`} className="flex justify-between items-center text-primary bg-my-black p-10 py-12 rounded-xl sm:py-24 xl:py-16">
        <div className="flex items-center gap-8 xl:gap-4">
          <SVGCard />
          <span className="flex-wrap text-[1.9rem] font-bold tracking-wider w-[15ch] leading-tight sm:w-max xl:text-2xl">Seleccionar tarjeta</span>
        </div>
        <SVGRightArrow />
      </Link>
    </article>
  )
}
