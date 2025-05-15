import Link from "next/link"
import Menu from "./Menu"
import { getNavUser } from "@/app/helpers/getNavUser";

type NavProps = {
  token: string;
  username: string;
  pathname: string;
  setShowMovilMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Nav = ({ token, username, pathname, setShowMovilMenu }: NavProps) => {

  if (token) {

    const [avatar, capitalName] = getNavUser(username)

    return (
      <Link href={"/dashboard"} className="flex items-center">

        <div className="flex justify-between items-center gap-5">
          <div className=" bg-primary font-bold rounded-xl tracking-tighter p-2 pr-3 text-2xl sm:text-3xl sm:p-3 sm:pr-4 xl:text-xl xl:p-2 xl:pr-3 2xl:p-1 2xl:pr-2 2xl:text-base">{avatar}</div>
          <div>
            <span className="text-white  font-bold hidden sm:flex sm:text-3xl xl:text-xl">{`Hola, ${capitalName}`}</span>

          </div>
        </div>

        <div className="sm:hidden flex items-center" onClick={() => setShowMovilMenu(prev => !prev)}>
          <Menu />
        </div>

      </Link>
    )
  }

  else if (pathname === "/register") {
    return <Link href={"/login"} className="nav-btn bg-my-grey-medium text-white">Iniciar sesión
    </Link>
  }

  else if (pathname === "/")
    return (
      <nav className="flex gap-8 xl:gap-5">
        <Link href={"/login"} >
          <button className="nav-btn bg-transparent text-primary">Ingresar</button>

        </Link>
        <Link href={"/register"} >
          <button className="nav-btn">Crear cuenta</button>
        </Link>
      </nav>
    )
}