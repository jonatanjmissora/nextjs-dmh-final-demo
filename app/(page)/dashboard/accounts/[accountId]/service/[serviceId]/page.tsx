import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import { getCookies } from "@/app/helpers/getCookies";
import { datedForm } from "@/app/helpers/getDateData";
import { intlNumberFormat } from "@/app/helpers/intlNumberFormat";
import { servicesDataMock } from "@/app/mock-data/services-data";
import { ServiceDataTypes } from "@/app/types/service.types";
import Link from "next/link";

export default async function ServiceId({ params, searchParams }: { params: { serviceId: string }, searchParams: { [key: string]: string | string[] | undefined } }) {

  const [accountId] = getCookies("accountid")
  const { serviceId } = params
  const { cardnum } = searchParams
  const serviceData: ServiceDataTypes = await servicesDataMock.servicesData[0]
  if (serviceData.invoice_value === 0) serviceData.invoice_value = 1

  const formatedAmount = intlNumberFormat(Number((serviceData.invoice_value * 100).toFixed(2)))

  return (
    <article className="dashboard-content-container gap-9 xl:gap-6 xl:pt-16">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/service`} className="link link-border" >Pagar servicios</Link>
      </div>

      <div className="rounded-xl bg-my-black text-white p-10 flex flex-col gap-12 sm:p-16 sm:px-24 xl:py-10 xl:gap-5">

        <div className="flex flex-col gap-4 xl:gap-1">
          <span className="text-2xl xl:text-xl">Servicio</span>
          <span className="text-3xl font-bold text-primary sm:text-4xl xl:text-3xl" >{serviceData.name}</span>
        </div>

        <div className="flex flex-col gap-4 xl:gap-1">
          <span className="text-2xl xl:text-xl">Importe</span>
          <span className="text-3xl font-bold text-primary xl:text-2xl" >${formatedAmount}</span>
        </div>

        <div className="flex flex-col gap-4 xl:gap-1">
          <span className="text-2xl xl:text-xl">Vencimiento</span>
          <span className="text-3xl xl:text-2xl" >{datedForm(serviceData.date).substring(10, 26)}</span>
        </div>
      </div>

      <div className='w-full flex flex-col gap-8 sm:flex-row-reverse'>
        <Link className='button-form card-shadow sm:w-1/2 xl:w-3/12 xl:ml-auto' href={`/dashboard/accounts/${accountId}/service/${serviceId}/checkout?cardnum=${cardnum}`}>Volver</Link>
      </div>
    </article>
  )
}
