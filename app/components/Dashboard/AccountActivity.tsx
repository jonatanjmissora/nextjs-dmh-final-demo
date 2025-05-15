import Link from "next/link";
import ActivityList from "./Activity/ActivityList";
import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import { getCookies } from "@/app/helpers/getCookies";
import { ActivityDataTypes } from "@/app/types/account.types";
import { sortedActivityByDate } from "@/app/helpers/getActualActivities";
import DashboardSearchBar from "./DashboardSearchBar";
import { activitiesDataMock } from "@/app/mock-data/activities-data";

export default async function AccountActivity() {

  const [token, accountId] = getCookies("token", "accountid")
  const activitiesData: ActivityDataTypes[] = activitiesDataMock
  const sortedByDateActivities = sortedActivityByDate(activitiesData)

  return (
    <div className="flex flex-col gap-7 xl:gap-5">
      <DashboardSearchBar placeholder={"Buscar en tu actividad"} />
      <div className="flex-1 bg-my-white card p-7 py-5 sm:px-12 sm:py-16 xl:py-8">
        <h2 className="text-2xl font-medium py-3 border-b border-gray-200 sm:text-3xl sm:border-gray-400 xl:text-xl">Tu actividad</h2>
        <ActivityList activities={sortedByDateActivities} />
        <Link className="text-lg font-medium flex justify-between items-center pt-6 sm:text-3xl xl:text-xl" href={`/dashboard/accounts/${accountId}/activity?page=1`}>
          <span>Ver toda tu actividad</span>
          <SVGRightArrow className="size-5 text-gray-600 sm:size-8 sm:opacity-100 xl:size-6" />
        </Link>
      </div>
    </div>
  )
}
