
import Navbar from '@/app/SiteComponents/Navbar'
import Footer from '@/app/SiteComponents/Footer'
import GetInvolvedBanner from '@/app/SiteComponents/GetInvolvedBanner'
import manifesto from '@/app/manifesto'
import HowWillIVote from '@/app/manifesto/HowWillIVote'
import { getManifesto } from '@/sanity/utils'
import { PortableText } from '@portabletext/react';


const formatTextAsParagraphs = (text) => {
    return text.split('\n\n').map((paragraph, index) => (
        <p className='' key={index}>{paragraph}</p>
    ));
};

const ManifestoSection = ({ section }) => {
    return (
        <div>
            {formatTextAsParagraphs(section)}
        </div>
    );
};

export default async function Manifesto() {
    const manifesto = await getManifesto();
    const areasOfFocus = manifesto.howWillIVote

    return (
        <div>
            <Navbar />
            <div className='pt-[160px] px-4 container max-w-4xl  mx-auto'>
                <h1 className='text-2xl lg:text-3xl font-bold tracking-tight '>{manifesto.introHeading}</h1>
                <div className='mb-[120px]  mt-[40px]'>
                     
                        <PortableText value={manifesto.intro}/>
                    
                </div>
             </div>
             <HowWillIVote areasOfFocus={areasOfFocus}/>
          <GetInvolvedBanner />
          <Footer />
        </div>
    )
}

