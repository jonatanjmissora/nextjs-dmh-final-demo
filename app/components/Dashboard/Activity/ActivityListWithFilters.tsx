import ActivityList from "./ActivityList";
import ActivityPagination from "./ActivityPagination";
import ActivityFilter from "./ActivityFilter";
import { ActivityDataTypes } from "@/app/types/account.types";

type FiltersData = {
    [key: string]: string;
}

export default async function ActivityListWithFilters({ filter, activities, activitiesLength }: { filter?: string, activities: ActivityDataTypes[], activitiesLength: number }) {

    const FILTERS: FiltersData = {
        "hoy": "Hoy",
        "ayer": "Ayer",
        "semana": "Última semana",
        "quincena": "Últimos 15 días",
        "mes": "Último mes",
        "anio": "Último año",
    }

    return (
        <div className="flex-1 flex flex-col bg-my-white rounded-xl shadow-2xl p-10 sm:py-16 xl:py-12">
            <div className="flex justify-between items-center pb-10 border-b border-gray-300">
                <div className="w-full flex justify-between">
                    <span className="text-2xl sm:text-3xl xl:text-2xl font-bold">
                        Tu actividad
                    </span>
                    <span className="px-4 text-gray-500 text-xl sm:px-0 sm:text-2xl xl:text-xl">
                        {filter && `${FILTERS[filter]}`}
                    </span>
                </div>
                <div className="sm:hidden">
                    <ActivityFilter />
                </div>
            </div>
            {activities.length === 0
                ? <p className='py-8 text-2xl text-gray-700 sm:text-3xl xl:text-xl'>No existe actividad</p>
                : <>
                    <ActivityList activities={activities} />
                    <ActivityPagination activitiesLength={activitiesLength} />
                </>
            }
        </div>
    )
}
