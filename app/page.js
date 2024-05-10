import Image from "next/image";
import Navbar from "./SiteComponents/Navbar";
import Hero from "./HomeComponents/Hero";
import MissionSection from "./HomeComponents/MissionSection";
import Policies from "./HomeComponents/Policies";
import GetInvolved from "./HomeComponents/GetInvolved";
import NewsSection from "./HomeComponents/NewsSection";
import ConnectSection from "./HomeComponents/ConnectSection";
import Footer from "./SiteComponents/Footer";

import getHomePage from "../sanity/utils";



export default async function Home() {
  const homeContent = await getHomePage();
  console.log(homeContent)
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar />
      <Hero />
      <MissionSection missionStatement={homeContent.missionStatement} missionStatementHeading={homeContent.missionStatementHeading}/>
      <Policies areasOfFocus={homeContent.areasOfFocus} areasOfFocusHeading={homeContent.areasOfFocusHeading}/>
      <GetInvolved heading={homeContent.getInvolvedHeading} donateInstructions={homeContent.donateInstructions} volunteerText={homeContent.volunteerText} voteInstructions={homeContent.voteInstructions}/>
      <NewsSection newsHeading={homeContent.newsHeading}/>
      <ConnectSection contactHeading={homeContent.contactSectionHeading}/>
      <Footer />
    </main>
  );
}
