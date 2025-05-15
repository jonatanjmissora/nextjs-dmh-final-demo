import SVGRightArrow from '@/app/assets/SVG/SVGRightArrow'
import ServiceList from '@/app/components/Dashboard/Service/ServiceList'
import SearchBar from '@/app/components/SearchBar'
import { getCookies } from '@/app/helpers/getCookies'
import Link from 'next/link'
import React from 'react'

export default function ServicePage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {

  const search = searchParams.search
  const [accountId] = getCookies("accountid")

  return (
    <article className="dashboard-content-container xl:py-16">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/service`} className="link link-border" >Pagar servicios</Link>
      </div>

      <SearchBar className='text-2xl' placeholder={"Buscá entre mas de 5.000 empresas"} />
      <ServiceList search={search} />

    </article>
  )
}
