import { getCookies } from '@/app/helpers/getCookies'
import { getServicesData } from '@/app/services/service.services'
import { ServicesDataTypes } from '@/app/types/service.types'
import Link from 'next/link'
import React from 'react'

export default async function ServiceList({ search }: { search: string | undefined }) {

  const [accountId] = getCookies("accountid")
  const servicesData: ServicesDataTypes[] = await getServicesData()
  let filteredServicesData = [...servicesData]
  if (search) filteredServicesData = filteredServicesData.filter(service =>
    service
      .name
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div className="bg-my-white card p-16 py-8">
      <h2 className='text-2xl font-bold border-b-[1px] border-gray-400 pb-8 sm:text-3xl xl:text-2xl'>Más recientes</h2>
      {filteredServicesData.length === 0
        ? <p className='text-2xl font-light py-5 xl:text-xl'>No existen servicios</p>
        : filteredServicesData.map(service => <ServiceRow key={service.id} service={service} accountId={accountId} />)
      }
    </div>
  )
}

const ServiceRow = ({ service, accountId }: { service: ServicesDataTypes, accountId: string }) => {

  return (
    <div className='flex justify-between text-2xl font-light border-b-[1px] border-gray-400 py-5 xl:text-xl'>
      <span>{service.name}</span>
      <Link className='font-bold text-xl' href={`/dashboard/accounts/${accountId}/service/${service.id}/bill`}>Seleccionar</Link>
    </div>
  )
}