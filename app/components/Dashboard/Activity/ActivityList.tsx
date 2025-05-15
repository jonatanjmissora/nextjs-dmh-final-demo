import { getActivityDateToShow } from "@/app/helpers/getActualActivities";
import { getCookies } from "@/app/helpers/getCookies";
import { intlNumberFormat } from "@/app/helpers/intlNumberFormat";
import { ActivityDataTypes } from "@/app/types/account.types";
import Link from "next/link";

const ACTIVITIES_PER_PAGE = 10;

export default function ActivityList({ activities }: { activities: ActivityDataTypes[] }) {

  const [accountId] = getCookies("accountid")
  activities = activities.slice(0, ACTIVITIES_PER_PAGE)

  return (
    <div className="flex-1 flex flex-col">
      {activities.map(activity => <ActivityRow key={activity.id} activity={activity} accountId={accountId} />)}
    </div>
  )
}

const ActivityRow = ({ activity, accountId }: { activity: ActivityDataTypes, accountId: string }) => {

  const dateToShow = getActivityDateToShow(activity.dated)

  return (
    <Link href={`/dashboard/accounts/${accountId}/activity/${activity.id}`} className="flex-1 max-h-24 flex items-center gap-4 py-3 border-b border-gray-200 text-xl sm:max-h-28 xl:border-gray-400">
      <div className="size-8 bg-primary rounded-full sm:size-12 xl:size-9"></div>
      <span className="text-2xl text-gray-700 sm:text-3xl xl:text-xl">{activity.description}</span>
      <div className="ml-auto flex flex-col items-end sm:text-2xl xl:text-lg">
        <span className="text-2xl text-gray-700 sm:text-3xl xl:text-2xl">$ {intlNumberFormat(activity.amount)}
        </span>
        <span className="text-base sm:text-xl xl:text-base text-[#aaa] font-bold">
          {dateToShow}
        </span>
      </div>
    </Link>
  )
}
