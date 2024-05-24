
import Navbar from '@/app/SiteComponents/Navbar'
import Footer from '@/app/SiteComponents/Footer'
import GetInvolvedBanner from '@/app/SiteComponents/GetInvolvedBanner'
import manifesto from '@/app/manifesto'
import HowWillIVote from '@/app/manifesto/HowWillIVote'
import { getManifesto } from '@/sanity/utils'
import { PortableText } from '@portabletext/react';


export default async function Manifesto() {
    const manifesto = await getManifesto();
    const areasOfFocus = manifesto.howWillIVote

    return (
        <div>
            <Navbar />
            <div className='pt-[160px] px-4 container max-w-4xl  mx-auto'>
                <h2 className='text-2xl lg:text-3xl lg:mt-8 lg:mt-0 mb-[40px]    tracking-tight text-center text-secondaryAccent lg:text-left'>Working for Edinburgh South</h2>
                <div className='mb-[80px] lg:mb-[120px] mt-[40px] text-center lg:text-left'>
                     
                        <PortableText value={manifesto.intro}/>
                    
                </div>
             </div>
             <HowWillIVote areasOfFocus={areasOfFocus}/>
          <GetInvolvedBanner />
          <Footer />
        </div>
    )
}

