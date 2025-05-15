import HeroText from "../components/Home/HeroText";
import HomeContent from "../components/Home/HomeContent";
import ResponsiveBG from "../components/Home/ResponsiveBG";

export default function Home() {

  return (
    <main className="bg-my-grey-light min-h-[710px] relative xl:min-h-[500px] xl:h-screen">
      <ResponsiveBG />
      <HeroText />
      <HomeContent />
    </main>
  );

}
