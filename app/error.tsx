"use client"
import Image from 'next/image';
import img404 from './assets/404.jpg';
import Link from 'next/link';

import React from 'react'
import { usePathname } from 'next/navigation';
import ErrorLinks from './components/ErrorLinks';

export default function error() {



  return (
    <section className='flex-1 flex flex-col justify-center items-center gap-8'>
      <div className='w-3/4 h-2/4 relative sm:w-1/2 sm:h-1/2 xl:w-4/12 xl:h-4/12'>
        <Image
          className="w-full h-full object-cover"
          src={img404}
          alt="imagen del hero"
          quality={100}
          fill
          sizes="100vw"
          priority
          placeholder="blur"
        ></Image>
      </div>
      <h2 className='text-4xl font-bold text-center sm:text-6xl xl:text-4xl'>Un error inesperado ha occurrido !!</h2>
      <ErrorLinks />
    </section>
  )
}
