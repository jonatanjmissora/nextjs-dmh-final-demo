import SVGClose from "@/app/assets/SVG/SVGClose"
import LinksMenu from "../LinksMenu"
import CloseSessionBtn from "../Button/CloseSessionBtn"
import { getNavUser } from "@/app/helpers/getNavUser"

export const MovilMenu = ({ setShowMovilMenu, username, accountId }: { setShowMovilMenu: React.Dispatch<React.SetStateAction<boolean>>, username: string, accountId: string }) => {

  const [, capitalName] = getNavUser(username)

  return (
    <div className="fixed h-screen inset-0 z-10 bg-primary text-3xl font-bold text-black">
      <div className="relative h-[18%] w-full bg-my-grey-medium flex flex-col justify-end pb-12 px-20">
        <div className="w-full flex justify-end absolute top-8 right-10">
          <button onClick={() => setShowMovilMenu(prev => !prev)}><SVGClose className="text-primary" /></button>
        </div>
        <div className="text-primary font-medium w-1/2 flex flex-col gap-2">
          <span>Hola,</span>
          <span className="block">{capitalName}</span>
        </div>

      </div>
      <nav className='p-12 px-20 text-3xl font-medium flex flex-col gap-8'>
        <LinksMenu accountId={accountId} setShowMovilMenu={setShowMovilMenu} />
        <button className="text-left" onClick={() => setShowMovilMenu(prev => !prev)}>
          <CloseSessionBtn />
        </button>
      </nav>
    </div>
  )
}