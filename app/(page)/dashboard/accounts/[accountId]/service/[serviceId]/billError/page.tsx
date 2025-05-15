import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import SVGWrong from '@/app/assets/SVG/SVGWrong'
import { getCookies } from '@/app/helpers/getCookies'
import Link from 'next/link'
import React from 'react'

export default function BillError({ params }: { params: { serviceId: string } }) {

  const serviceId = params.serviceId
  const [accountId] = getCookies("accountid")

  return (
    <article className="dashboard-content-container gap-7 xl:py-16  xl:gap-0">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/service`} className="link link-border" >Pagar servicios</Link>
      </div>

      <div className='bg-my-black p-12 flex flex-col justify-center items-center gap-8 rounded-xl relative sm:gap-12 sm:py-20 xl:p-16 xl:gap-6'>

        <SVGWrong className='size-16 sm:size-28 xl:size-20' />
        <h2 className='text-3xl font-bold tracking-widest text-white text-center sm:text-4xl sm:px-28 xl:text-3xl xl:px-0'>No encontramos facturas asociadas a este dato</h2>

        <hr className='w-full opacity-75' />

        <p className='text-gray-400 text-lg text-center sm:px-12 sm:text-2xl xl:px-0 xl:w-7/12 xl:text-xl'>Revisá el dato ingresado. Si es correcto, es posible que la empresa aún no haya cargado tu factura</p>

      </div>

      <div className='w-full flex justify-end'>
        <Link className='button-form card-shadow w-1/2 h-20 sm:h-28 sm:w-full sm:mt-6 xl:w-3/12 xl:h-20' href={`/dashboard/accounts/${accountId}/service/${serviceId}/bill`}>Revisar dato</Link>
      </div>

    </article>
  )
}
