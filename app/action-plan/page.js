'use client'
import Navbar from '@/app/SiteComponents/Navbar'
import Footer from '@/app/SiteComponents/Footer'
import GetInvolvedBanner from '@/app/SiteComponents/GetInvolvedBanner'
import manifesto from '@/app/manifesto'
import {useState} from 'react'
import FilterRow from './Filter-row'

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

export default function ActionPlan() {
    const manifestoAreasOfFocus = Object.keys(manifesto.howIWillVote);
    const [activeAreaOfFocus, setactiveAreaOfFocus] = useState(manifestoAreasOfFocus[0]);
    return (
        <div>
            <Navbar />
            <div className='pt-[160px] px-4 container max-w-4xl  mx-auto'>
                <h1 className='text-2xl lg:text-3xl font-bold tracking-tight '>Overview</h1>
                <p className='mb-[120px]  mt-[40px]'>
                    <ManifestoSection section={manifesto.overview}/>
                </p>
             </div>
             <div className='bg-gray-50 px-4'>
                <div className='container mx-auto  py-[120px]'>
                    <h2>Once elected, how will I vote on major issues?</h2>
                    <div className='grid grid-cols-8 gap-8 pt-[40px] lg:pt-[80px]'>
                    <FilterRow setactiveAreaOfFocus={setactiveAreaOfFocus} activeAreaOfFocus={activeAreaOfFocus} manifestoAreasOfFocus={manifestoAreasOfFocus}/>
                    <div className='col-span-8 bg-white p-4 px-8 pb-8 rounded-lg lg:col-span-6 -mt-[20px] shadow-xl'>
                        <ManifestoSection section={manifesto.howIWillVote[activeAreaOfFocus]}/>
                    </div>
                    </div>
                </div>
             </div>
          <GetInvolvedBanner />
          <Footer />
        </div>
    )
}



// Many elected representatives in the United Kingdom are not serving constituents properly. Often attending to their own agenda, or towing the party line, at the expense of the public interest. 
// <br></br>
// <br></br>

// As an Independent Member of Parliament, my aim, first and foremost, is to serve with integrity and honesty. I will vote on issues according to what I believe is right, based on the consistent feedback of my constituents. I will not vote according to party politics or top-down, command and control strategies.
// <br></br>
// <br></br>

// As an independent MP for Westminster, my job is to represent the electorate on the big issues, such as International Relations, Economic Policy, Environment, Trade, and Industry. But alongside this, I intend do a better job of getting the basics right. I will be focussing on what I can control, such as creating stronger communities, assisting with local issues in Edinburgh South, and holding local government to account. 
// <br></br>
// <br></br>

// I believe strongly that a sense of community is increasingly lacking in the UK, a facet of society which is necessary for easing many of the burdens of modern society. Once elected, I will make the changes required to build strong communities. 
// <br></br>
// <br></br>

// Due to the dissatisfaction with the major parties, the coming General Election offers a once in a generation opportunity for independent politicians to drive real change on a national and global scale. Polling guru Professor John Curtis, of Strathclyde University, has proclaimed that “a hung parliament is the best labour can hope for.” This means that Independents, and small parties, can have a significant influence on policy decisions, by leading all party initiatives, and forming alliances around certain issues, withholding votes if necessary. 
// <br></br>
// <br></br>

// I will have the freedom and public profile to raise the concerns of voters directly, rather than filtering my statements through a party machine. I will not be beholden to the demands of large, political donors, who pay for influence, and undermine democracy. I will not be vulnerable to threats against my own career if I don’t follow the party whip. 
// <br></br>
// <br></br>

// For all these reasons, getting more Independent politicians into government will be vital for holding the larger parties to account, ensuring they deliver on their promises to voters.
// <br></br>
// <br></br>
// As an independent candidate, I will use my vote to bring forward policy which helps my constituents but also entirety of the United Kingdom.

// <br></br>
// <br></br>
// I seek to bring an end to the partisan divisions which are tearing this country apart. Because we believe that in Britain, we all have much more in common than that which separates us. 
// <br></br>
// <br></br>

// The solutions to problems such as; government corruption, attacks on civil liberties, failure of politicians to abide by national and international rule of law, and erosion of democracy by mega corporations, cut across party lines. 

// <br></br>
// <br></br>
// The British public are crying out for representatives who simply perform their main function well, which is to serve the public. We do not want politicians who use their positions to line their own pockets or protect their own careers within their chosen party. This is why I am standing as an independent, so I can act on behalf of our community, with selfless commitment, and courage.