export default function HeroText() {
  return (
    <div className="absolute left-8 top-20 w-[185px] sm:top-32 sm:w-[425px] sm:left-20 xl:top-24 xl:w-[30vw] xl:left-14 2xl:w-[27vw] 2xl:top-32">
      <p className="text-white text-[2.8rem] font-medium leading-[1.10] tracking-wide sm:text-[4.5rem] sm:font-normal sm:leading-[1.1] xl:leading-none xl:text-[3.25rem] 2xl:text-5xl">
        De ahora en adelante, hacés más con tu dinero
      </p>
      <div className='h-[0.4rem] w-10 bg-primary mt-4 block sm:hidden xl:hidden'></div>
      <p className="w-[90%] text-4xl text-primary font-light leading-tight pt-5 sm:text-[3.5rem] xl:text-[4.5vh] xl:leading-none">
        Tu nueva <span className="font-[500] text-[2.25rem] sm:text-[3.5rem] xl:text-[4.5vh]">billetera virtual</span>
      </p>
    </div>
  )
}
