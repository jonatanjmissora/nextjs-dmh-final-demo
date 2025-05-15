import SVGCheck from "@/app/assets/SVG/SVGCheck";
import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import { getCookies } from "@/app/helpers/getCookies";
import { datedForm } from "@/app/helpers/getDateData";
import { intlNumberFormat } from "@/app/helpers/intlNumberFormat";
import { transactionDataMock } from "@/app/mock-data/transaction-data";
import { TransactionDataTypes } from "@/app/types/transaction.types";
import Link from "next/link";

const spanishType = (value: string) => {
  const TYPES = [
    { EN: "Transaction", SP: "Transacción" },
    { EN: "Deposit", SP: "Depósito" },
    { EN: "Transfer", SP: "Transferencia" },
  ]
  const actualType = TYPES.filter(type => type.EN === value)[0]
  return actualType.SP
}

export default async function ServiceSucces({ searchParams }: { searchParams: { [key: string]: string } }) {

  const [accountId, token] = getCookies("accountid", "token")
  const { transactionId } = searchParams
  const transactionData: TransactionDataTypes = await transactionDataMock.transactionData

  const formatedAmount = intlNumberFormat(transactionData.amount)

  return (
    <article className="dashboard-content-container gap-9 xl:gap-6 xl:pt-16">

      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <Link href={`/dashboard/accounts/${accountId}/service`} className="link link-border" >Pagar servicios</Link>
      </div>

      <div className='bg-primary rounded-xl p-10 flex flex-col justify-center items-center gap-4 xl:p-6'>
        <SVGCheck className="size-16 sm:size-28 xl:size-16" />
        <h2 className='text-3xl font-bold sm:text-4xl xl:text-3xl'>Ya realizamos tu pago</h2>
      </div>

      <div className="rounded-xl bg-my-black text-white p-10 flex flex-col gap-12 sm:p-16 sm:px-24 xl:py-10 xl:gap-5">
        <div className="flex flex-col gap-4 xl:gap-1">
          <span className="text-2xl xl:text-xl">{datedForm(transactionData.dated).substring(10)}</span>
          <span className="text-3xl font-bold text-primary xl:text-2xl" >${formatedAmount}</span>
        </div>

        <div className="flex flex-col gap-4 xl:gap-1">
          <span className="text-2xl xl:text-xl">Para</span>
          <span className="text-3xl font-bold text-primary sm:text-4xl xl:text-3xl" >{transactionData.description}</span>
        </div>

        <div className="flex flex-col gap-4 xl:gap-1">
          <span className="text-2xl xl:text-xl">Tipo</span>
          <span className="text-3xl xl:text-2xl" >{spanishType(transactionData.type)}</span>
        </div>
      </div>

      <div className='w-full flex flex-col gap-8 sm:flex-row-reverse'>
        <Link className="button-form card-shadow bg-gray-400 sm:w-1/2 xl:w-3/12" href={""}>Descargar comprobante</Link>
        <Link className='button-form card-shadow sm:w-1/2 xl:w-3/12 xl:ml-auto' href={`/dashboard/`}>Ir al inicio</Link>
      </div>
    </article>
  )
}
