"use client"

import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { useState } from "react";
import { MovilMenu } from "./MovilMenu";
export default function Navbar({ token, username, accountId }: { token: string, username: string, accountId: string }) {

  const pathname = usePathname()
  const [showMovilMenu, setShowMovilMenu] = useState<boolean>(false)

  const isLoginPath = pathname === "/login"
  const isRegisterPath = pathname === "/register"
  const isAuthPath = isLoginPath || isRegisterPath
  const headerBg = isAuthPath ? "bg-primary" : "bg-my-black"

  return (
    <>
      <header className={`relative flex justify-between items-center px-8 ${headerBg} h-[56px] sm:h-[60px] 2xl:h-[64px]`}>
        <Logo username={username} isAuthPath={isAuthPath} />
        <Nav
          token={token}
          username={username}
          pathname={pathname}
          setShowMovilMenu={setShowMovilMenu}
        />
      </header>
      {
        showMovilMenu && <MovilMenu setShowMovilMenu={setShowMovilMenu} username={username} accountId={accountId} />
      }
    </>
  )
}