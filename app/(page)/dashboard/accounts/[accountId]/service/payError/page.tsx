import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import SVGWrong from "@/app/assets/SVG/SVGWrong";
import { getCookies } from "@/app/helpers/getCookies";
import Link from "next/link";

export default function PaymentError() {

  const [accountId] = getCookies("accountid")

  return (
    <article className="dashboard-content-container xl:py-16">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/service`} className="link link-border" >Pagar servicios</Link>
      </div>

      <div className="bg-my-black p-12 flex flex-col justify-center items-center gap-8 rounded-xl relative sm:gap-12 sm:py-20 xl:p-16 xl:gap-6">
        <SVGWrong className='size-16 sm:size-28 xl:size-20' />
        <h2 className="text-3xl font-bold tracking-widest text-white text-center w-[70%] sm:w-full sm:text-4xl xl:text-3xl xl:px-0">Hubo un problema con tu pago</h2>

        <hr className='w-full opacity-75' />

        <div>
          <p className='text-gray-400 text-lg text-center sm:text-2xl xl:px-0 xl:text-xl'>Puede deberse a fondos insuficientes</p>
          <p className='text-gray-400 text-lg text-center sm:text-2xl xl:px-0 xl:text-xl'>Comunicate con la entidad emisora de la tarjeta</p>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <Link className="button-form card-shadow w-1/2 h-20 sm:h-28 sm:text-3xl sm:w-full sm:mt-6 xl:w-3/12 xl:text-2xl xl:h-20" href={`/dashboard/accounts/${accountId}/service`}>Volver a intentarlo</Link>
      </div>

    </article>
  )
}
