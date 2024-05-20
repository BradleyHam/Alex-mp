import Image from "next/image";
import Navbar from "./SiteComponents/Navbar";
import Hero from "./HomeComponents/Hero";
import MissionSection from "./HomeComponents/MissionSection";
import Policies from "./HomeComponents/Policies";
import GetInvolved from "./HomeComponents/GetInvolved";
import NewsSection from "./HomeComponents/NewsSection";
import ConnectSection from "./HomeComponents/ConnectSection";
import Footer from "./SiteComponents/Footer";

import {getHomePage, getNewsPosts, getAboutPage} from "../sanity/utils";
import WhyVoteAlex from "./about/WhyVoteAlex";
import GetInvolvedBanner from "./SiteComponents/GetInvolvedBanner";

export default async function Home() {
  const homeContent = await getHomePage();
  const newsPosts = await getNewsPosts();
  const aboutData = await getAboutPage();
  const firstThreePosts = newsPosts.slice(0, 3);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar />
      <Hero />
      <WhyVoteAlex points={aboutData.whyVotePoints} whyVoteHeading={aboutData.whyVoteHeading}/>
      {/* <MissionSection missionStatement={homeContent.missionStatement} missionStatementHeading={homeContent.missionStatementHeading}/> */}
      <Policies areasOfFocus={homeContent.areasOfFocus} areasOfFocusHeading={homeContent.areasOfFocusHeading}/>
      <NewsSection newsHeading={homeContent.newsHeading} newsPosts={firstThreePosts}/>
      <ConnectSection contactHeading={homeContent.contactSectionHeading}/>
      <GetInvolvedBanner />
      <Footer />
    </main>
  );
}
