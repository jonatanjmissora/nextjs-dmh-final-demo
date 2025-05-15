import { getCookies } from "@/app/helpers/getCookies";
import Link from "next/link";

export default function AccountActions() {

  const [accountId] = getCookies("accountid")

  return (
    <div className="flex flex-col gap-7 xl:flex-row">
      <Link className="button-form h-24 card-shadow w-full sm:h-36 sm:text-4xl sm:py-12 xl:text-2xl xl:h-28" href={`/dashboard/accounts/${accountId}/deposits`}>Cargar dinero</Link>
      <Link className="button-form h-24 card-shadow w-full sm:h-36 sm:text-4xl sm:py-12 xl:text-2xl xl:h-28" href={`/dashboard/accounts/${accountId}/service`}>Pago de servicios</Link>
    </div>
  )
}
