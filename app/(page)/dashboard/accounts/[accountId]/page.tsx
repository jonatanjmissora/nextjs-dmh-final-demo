import SVGRightArrow from "@/app/assets/SVG/SVGRightArrow";
import AccountData from "@/app/components/Dashboard/Profile/AccountData";
import ProfileCards from "@/app/components/Dashboard/Profile/ProfileCards";
import ProfileData from "@/app/components/Dashboard/Profile/ProfileData";

export default function Profile() {

  return (
    <article className="dashboard-content-container xl:py-8">
      <div className="flex items-center gap-4 text-2xl sm:hidden">
        <SVGRightArrow className="text-gray-600 size-7" />
        <span className="link link-border" >Perfil</span>
      </div>
      <ProfileData />
      <ProfileCards />
      <AccountData />
    </article>
  )
}
