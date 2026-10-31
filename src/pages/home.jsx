import HomeHero from "./HomeHero";
import HomeBrandSpotlight from "./HomeBrandSpotlight";
import HomeFashion from "./HomeFashion";
import HomeBeauty from "./HomeBeauty";
import HomeInandOut from "./HomeInandOut";
import HomeLatestGrid from "./HomeLatestGrid";
import HomeNewsLetter from "./HomeNewsLetter";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <HomeHero />
      <HomeBrandSpotlight />
      <HomeFashion />
      <HomeBeauty />
      <HomeInandOut />
      <HomeLatestGrid />
      <HomeNewsLetter />
    </main>
  );
};

export default Home;
