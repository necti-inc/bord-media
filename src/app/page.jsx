import style from "./page.module.css";
import theme from "./theme";
import HomeHeader from "@/sections/home-header/HomeHeader";
import HomeRecentProjects from "@/sections/home-recent-project/HomeRecentProjects";
import HomeGrowth from "@/sections/home-growth/HomeGrowth";
import HomeAbout from "@/sections/home-about/HomeAbout";
import HomePackages from "@/sections/home-packages/HomePackages";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      {/*<HomeRecentProjects />*/}
      <HomeGrowth />
      <HomeAbout />
      <HomePackages />
    </div>
  );
}
