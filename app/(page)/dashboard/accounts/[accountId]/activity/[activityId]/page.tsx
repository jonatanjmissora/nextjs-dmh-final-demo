import SVGCheck from "@/app/assets/SVG/SVGCheck";
import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import { getCookies } from "@/app/helpers/getCookies";
import { datedForm } from "@/app/helpers/getDateData";
import { intlNumberFormat } from "@/app/helpers/intlNumberFormat";
import { getActivityData } from "@/app/services/activity.services";
import { ActivityDataTypes } from "@/app/types/account.types";
import Link from "next/link";

export default async function ActivityId({ params }: { params: { accountId: string, activityId: string } }) {

  const [token, accountId] = getCookies("token", "accountid")
  const { activityId } = params
  const actualActivity = await getActivityData(activityId, accountId, token)

  return (
    <article className="w-full flex-1 dashboard-content-container xl:gap-8 xl:py-12">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/activity?page=1`} className="link link-border" >Tu actividad</Link>
      </div>
      <div className="bg-my-black card p-8 text-white sm:p-28 relative xl:px-10 xl:py-3 xl:pb-8">
        <div className="text-primary flex gap-6 py-6 px-4 pb-10 xl:pb-5">
          <SVGCheck className="size-12 sm:size-10 xl:size-8" />
          <span className="text-4xl font-bold sm:text-3xl xl:text-2xl">Aprobada</span>
        </div>
        <hr />
        <div className="flex flex-col gap-8 xl:gap-6">
          <span className="pt-5 px-4 text-2xl sm:absolute sm:top-10 sm:right-10 xl:text-xl xl:top-5 xl:right-5">{datedForm(actualActivity.dated)}</span>

          <ActivityType actualActivity={actualActivity} />

          <div className="px-4 flex flex-col gap-3 xl:gap-1">
            <span className="text-2xl xl:text-xl">Número de operación</span>
            <span className="text-2xl text-primary font-light xl:text-xl">{actualActivity.id}</span>
          </div>

        </div>
      </div>
      <div className="flex flex-col justify-end sm:flex-row-reverse gap-8 xl:w-1/2 xl:ml-auto">
        <Link className="button-form bg-gray-400 card-shadow" href={`/dashboard`}>Descargar comprobante</Link>
        <Link className="button-form card-shadow" href={`/dashboard`}>Ir al inicio</Link>
      </div>

    </article>
  )
}

const ActivityType = ({ actualActivity }: { actualActivity: ActivityDataTypes }) => {
  const { type } = actualActivity
  const typeContent = {
    "Deposit": {
      typeTxt: "Depósito de dinero",
      typeToTxt: "Le depositaste a",
      typeTo: actualActivity.destination
    },
    "Transfer": {
      typeTxt: "Transferencia de dinero",
      typeToTxt: "Le transferiste a",
      typeTo: actualActivity.destination
    },
    "Transaction": {
      typeTxt: "Pago de servicio",
      typeToTxt: "Servicio",
      typeTo: actualActivity.description
    },
  }

  const formatedAmount = intlNumberFormat(actualActivity.amount)

  return (
    <>
      <div className="px-4 flex flex-col gap-3 sm:pt-8 xl:gap-1">
        <span className="text-2xl xl:text-xl">{typeContent[type as keyof typeof typeContent].typeTxt}</span>
        <span className="text-3xl font-bold text-primary xl:text-2xl">$ {formatedAmount}</span>
      </div>

      <div className="px-4 flex flex-col gap-3 xl:gap-1">
        <span className="text-2xl xl:text-xl">{typeContent[type as keyof typeof typeContent].typeToTxt}</span>
        <span className="text-3xl font-bold text-primary sm:text-4xl xl:text-3xl">{typeContent[type as keyof typeof typeContent].typeTo}</span>
      </div>
    </>
  )

}