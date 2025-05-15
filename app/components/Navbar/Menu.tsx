import SVGMenu from "@/app/assets/SVG/SVGMenu"
import { useState } from "react"

export default function Menu() {

  const [menu, setMenu] = useState("close")

  const toggleMenu = () => {
    if (menu === "close") {
      setMenu("open")

    }
    else {
      setMenu("close")
    }
  }

  return (
    <>
      <button onClick={toggleMenu}>
        <SVGMenu className="text-primary size-11" />
      </button>

    </>
  )
}