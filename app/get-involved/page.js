import Navbar from '@/app/SiteComponents/Navbar'
import Footer from '@/app/SiteComponents/Footer'
import GetInvolved from '@/app/HomeComponents/GetInvolved'
import {getHomePage} from '@/sanity/utils'
export default async function getInvolved(){
    const homeContent = await getHomePage();
  
    return (
        <div className=''>
            <Navbar />
            <div className='mt-[80px] min-h-screen'>
                <GetInvolved heading={homeContent.getInvolvedHeading} donateInstructions={homeContent.donateInstructions} volunteerHeading={homeContent.volunteerHeading} voteInstructions={homeContent.voteInstructions} linkToVote={homeContent.linkToVote} linkToDonate={homeContent.linkToDonate}/>
            </div>
            <Footer />
        </div>
    )
}