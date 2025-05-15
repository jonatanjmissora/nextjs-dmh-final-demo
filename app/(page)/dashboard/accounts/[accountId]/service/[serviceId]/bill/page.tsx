import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import ServiceBillForm from '@/app/components/Dashboard/Service/ServiceBillForm'
import { getCookies } from '@/app/helpers/getCookies'
import Link from 'next/link'
import React from 'react'

export default async function ServiceBill({ params }: { params: { serviceId: string } }) {
  const [accountId] = getCookies("accountid")
  const serviceId = params.serviceId

  return (
    <article className="dashboard-content-container gap-7 xl:py-16">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/service`} className="link link-border" >Pagar servicios</Link>
      </div>

      <div className='bg-my-black p-10 flex flex-col gap-8 pb-24 rounded-xl relative sm:p-12 sm:pb-20 xl:p-16 xl:pb-12'>
        <ServiceBillForm accountId={accountId} serviceId={serviceId} />
      </div>

    </article>
  )
}