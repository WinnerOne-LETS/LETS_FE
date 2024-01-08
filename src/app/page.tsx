import BottomNav from "./_component/common/layout/BottomNav";
import DefaultHeader from "./_component/common/layout/DefaultHeader";
import HomeAdvertisements from "./(navbar)/home/_component/HomeAdvertisements";
import HomeHashtags from "./(navbar)/home/_component/HomeHashtags";
import HomePackages from "./(navbar)/home/_component/HomePackages";
import HomeProsAndCons from "./(navbar)/home/_component/HomeProsAndCons";
import HomeThemePackage from "./(navbar)/home/_component/HomeThemePackage";

const Home = async () => {
  return (
    <section className="flex flex-col items-center [&>*:nth-child(n+2)]:mb-10">
      <DefaultHeader text="" theme="main" />
      {/* 광고구좌 */}
      <HomeAdvertisements />
      {/* 해시태그 검색 */}
      <HomeHashtags />
      {/* 패키지 컨셉 */}
      <HomeThemePackage />
      {/* 찬반토론 */}
      <HomeProsAndCons />
      {/* 초특가 패키지 목록 */}
      <HomePackages />
      <BottomNav />
    </section>
  );
};

export default Home;
