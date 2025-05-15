import SVGSearch from "@/app/assets/SVG/SVGSearch"
import { getCookies } from "@/app/helpers/getCookies"
import InputDashboardSearch from "../Input/InputDashboardSearch"

export default function DashboardSearchBar({ className, placeholder }: { className?: string, placeholder: string }) {

  const [accountId] = getCookies("accountid")

  return (
    <div className="card-shadow w-full relative flex items-center">
      <SVGSearch className={"size-6 absolute left-[5%] xl:size-5 xl:left-[2.5%]"} />
      <InputDashboardSearch className={`w-full pl-16 sm:pl-20 sm:text-3xl sm:py-8 xl:text-xl xl:pl-16 xl:py-5 ${className}`} accountId={accountId} />
    </div>
  )
}
