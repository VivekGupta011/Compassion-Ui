import Camp from "@/components/Camp";
import CardInfo from "@/components/CardInfo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FooterInfo from "@/components/FooterInfo";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Help from "@/components/Help";
import Hero from "@/components/Hero";
import MiddleBgImage from "@/components/MiddleBgImage";
import Navbar from "@/components/Navbar";
import Question from "@/components/Question";
import SiteInfo from "@/components/SiteInfo";
import TargetPage from "@/components/TargetPage";
import WorkRatio from "@/components/WorkRatio";
import MainLogo from "@/constants/AssetsSvg/MainLogo";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SiteInfo/>
      <CardInfo/>
      <WorkRatio/>
      <MiddleBgImage/>
      <TargetPage/>
      <Question/>
      <Help/>
      <Footer/>
      <FooterInfo/>
    </>
  );
}
