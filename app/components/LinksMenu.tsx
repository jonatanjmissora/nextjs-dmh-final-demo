"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LinksMenu({ accountId, setShowMovilMenu }: { accountId: string, setShowMovilMenu?: React.Dispatch<React.SetStateAction<boolean>> }) {

  const LINKS = [
    { href: `/dashboard`, text: "Inicio", pathname: "dashboardHome" },
    { href: `/dashboard/accounts/${accountId}/activity?page=1`, text: "Actividad", pathname: "activity" },
    { href: `/dashboard/accounts/${accountId}`, text: "Tu perfil", pathname: "account" },
    { href: `/dashboard/accounts/${accountId}/deposits`, text: "Cargar dinero", pathname: "deposits" },
    { href: `/dashboard/accounts/${accountId}/service`, text: "Pagar Servicios", pathname: "service" },
    { href: `/dashboard/accounts/${accountId}/cards`, text: "Tarjetas", pathname: "cards" },
  ]

  const handleClick = () => {
    if (setShowMovilMenu)
      setShowMovilMenu(prev => !prev)
  }

  const pathname = usePathname().split("/")
  let actualLink = "dashboardHome"
  if (pathname.length === 4) actualLink = "account"
  if (pathname.length > 4) actualLink = pathname[4]

  return (
    <>
      {LINKS.map((link, index) =>
        <Link
          key={index}
          className={`${actualLink === link.pathname ? "font-extrabold" : ""}`}
          href={link.href}
          onClick={handleClick}
        >
          {link.text}
        </Link>
      )}
    </>
  )
}
