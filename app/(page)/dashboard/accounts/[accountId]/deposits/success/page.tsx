import SVGCheck from "@/app/assets/SVG/SVGCheck";
import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import { getCookies } from "@/app/helpers/getCookies";
import { datedForm } from "@/app/helpers/getDateData";
import { activitiesDataMock } from "@/app/mock-data/activities-data";
import { ActivityDataTypes } from "@/app/types/account.types";
import Link from "next/link";

export default async function DepositSuccess({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

  const [accountId, token] = getCookies("accountid", "token")
  const id = searchParams.id as string ?? ""
  const activityData: ActivityDataTypes = await activitiesDataMock[0]

  return (
    <article className="dashboard-content-container xl:py-12">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/deposits`} className="link link-border" >Cargar dinero</Link>
      </div>

      <div className="rounded-xl relative flex flex-col justify-center items-center gap-4 bg-primary p-11 xl:py-4">
        <SVGCheck className="size-16 sm:size-24 xl:size-20" />
        <p className="text-2xl font-bold sm:text-4xl xl:text-3xl">Ya cargamos el dinero en tu cuenta</p>
      </div>

      <div className="relative flex flex-col gap-12 text-white bg-my-black rounded-xl p-12 sm:py-16 xl:py-12 xl:gap-6">

        <h2 className="text-3xl text-primary font-bold sm:hidden">Revisá que está todo bien</h2>

        <hr className="text-gray-600 sm:hidden" />

        <div className="flex flex-col gap-2 sm:px-10">
          <span className="text-xl opacity-75 sm:text-2xl xl:text-xl">{datedForm(activityData.dated).substring(10)}</span>
          <span className="text-primary text-2xl font-bold sm:text-3xl xl:text-xl">${activityData.amount}</span>
        </div>

        <div className="flex flex-col gap-2 sm:px-10">
          <p className="text-xl opacity-75 xl:text-base">Para</p>
          <p className="text-primary text-3xl font-bold sm:text-4xl xl:text-2xl ">{activityData.destination}</p>
        </div>

        <div className="opacity-75 flex flex-col gap-2 sm:px-10">
          <p className="text-xl sm:text-2xl xl:text-xl">Brubank</p>
          <p className="text-base sm:text-2xl xl:text-xl">{activityData.origin}</p>
        </div>

      </div>

      <div className="flex flex-col gap-8 sm:flex-row-reverse sm:gap-6 xl:w-1/2 xl:ml-auto">
        <Link className="button-form card bg-gray-400" href={""}>Descargar comprobante</Link>
        <Link className="button-form card-shadow rounded-xl bg-primary" href={`/dashboard`}>Ir al inicio</Link>
      </div>

    </article>
  )
}
