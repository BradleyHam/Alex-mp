import Image from "next/image";
import Navbar from "./SiteComponents/Navbar";
import Hero from "./HomeComponents/Hero";
import MissionSection from "./HomeComponents/MissionSection";
import Policies from "./HomeComponents/Policies";
import GetInvolved from "./HomeComponents/GetInvolved";
import NewsSection from "./HomeComponents/NewsSection";
import ConnectSection from "./HomeComponents/ConnectSection";
import Footer from "./SiteComponents/Footer";

import {getHomePage, getNewsPosts} from "../sanity/utils";

export default async function Home() {
  const homeContent = await getHomePage();
  const newsPosts = await getNewsPosts();
  const firstThreePosts = newsPosts.slice(0, 3);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar />
      <Hero />
      <MissionSection missionStatement={homeContent.missionStatement} missionStatementHeading={homeContent.missionStatementHeading}/>
      <Policies areasOfFocus={homeContent.areasOfFocus} areasOfFocusHeading={homeContent.areasOfFocusHeading}/>
      <GetInvolved heading={homeContent.getInvolvedHeading} donateInstructions={homeContent.donateInstructions} volunteerHeading={homeContent.volunteerHeading} voteInstructions={homeContent.voteInstructions} linkToVote={homeContent.linkToVote} linkToDonate={homeContent.linkToDonate}/>
      <NewsSection newsHeading={homeContent.newsHeading} newsPosts={firstThreePosts}/>
      <ConnectSection contactHeading={homeContent.contactSectionHeading}/>
      <Footer />
    </main>
  );
}
