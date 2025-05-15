export default function Footer() {
  return (
    <footer className="text-[14px] bg-my-grey-medium flex justify-center items-center px-8 text-primary min-h-[56px] sm:justify-start">
      © {new Date().getFullYear()} Digital Money House
      <div className="ml-auto flex gap-2 items-center justify-center">
        <span className="text-xl">⚠</span>
        <span > Advertencia!! versión de prueba, ningún dato será guardado</span>
      </div>
    </footer>
  )
}
