import Link from "next/link";

export default function ErrorLinks() {

  return (
    <div className='flex justify-between gap-4 w-11/12 sm:w-8/12 xl:w-4/12 '>
      <Link className='button-form px-6 bg-primary' href={"/dashboard"}>Ir al inicio</Link>
    </div>
  )
}
