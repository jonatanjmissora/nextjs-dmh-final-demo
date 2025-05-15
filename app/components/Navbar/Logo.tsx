import SVGLogo from "@/app/assets/SVG/SVGLogo"
import Link from "next/link"

export const Logo = ({ username, isAuthPath }: { username: string, isAuthPath: boolean }) => {

  const logoColor = isAuthPath ? "text-my-black" : "text-primary"

  return (
    <Link href={username ? "/dashboard" : "/"}>
      <SVGLogo className={`text-[16px] ${logoColor} size-24 sm:size-36 xl:size-20`} />
    </Link>
  )
}