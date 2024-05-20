
import Navbar from "../SiteComponents/Navbar";
import { getAboutPage } from "@/sanity/utils";
import AboutSection from "./AboutSection";
import WhyVoteAlex from "./WhyVoteAlex";
import WhyNotTories from "./WhyNotTories";
import GetInvolvedBanner from "@/app/SiteComponents/GetInvolvedBanner";
import Footer from "../SiteComponents/Footer";



export default async function about (){
    const aboutData = await getAboutPage();

    return(
        <div>
            <Navbar/>
            <div className="about-content pt-[80px] bg-gray-50"> 
                <AboutSection aboutTitle={aboutData.aboutTitle} about={aboutData.about} image={aboutData.aboutImage} />
               
                <WhyNotTories  points={aboutData.whyNotPoints} heading={aboutData.whyNotToriesHeading}/>
                <GetInvolvedBanner text='Get Involved'/>
            </div>
            <Footer />
        </div>
    )
}