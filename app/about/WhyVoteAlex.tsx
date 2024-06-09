import { GiCheckMark } from "react-icons/gi";
import { GoCheckCircleFill } from "react-icons/go";
import Link from "next/link";
import SecondaryButton from "../SiteComponents/SecondaryButton";
import Image from "next/image";
export default function WhyVoteAlex({points, whyVoteHeading}: {points: string[], whyVoteHeading: string}) {
    return (
        <div className="bg-white py-[80px] lg:py-[120px] w-full">
            
            <div className="container px-4 lg:px-0 mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-14 lg:items-start lg:space-x-8 "> 
                <div className="image-side  w-full ">
                    <div className="  h-[400px]  ">
                        <div className="relative h-full w-full p-2">
                        <Image src='/images/alex-mp-7.webp' layout='fill' alt='Alexander Martin, independent MP candidate for Edinburgh South' objectPosition="top" objectFit='cover'/>

                        </div>
                    </div>
                    <p className="quote-one italic text-xl font-light  text-center lg:text-left mt-[40px]"><span className="text-3xl font-bold text-gray-400 mr-2">&quot;</span>I&apos;m dismayed by the quality of many elected representatives. I want to bring honesty, integrity,
and selfless commitment, back into politics<span className="text-3xl font-bold text-gray-400 ml-2">&quot;</span></p>
                    <p className="quote-two italic text-xl font-light  text-center lg:text-left"><span className="text-3xl font-bold text-gray-400 mr-2">&quot;</span>This is the constituency I live in,
and I have a deep affection for
the city of Edinburgh,
where I call home<span className="text-3xl font-bold text-gray-400 ml-2">&quot;</span></p>
                </div>
                <div className="text-side lg:flex-1 order-first max-w-3xl mx-auto flex flex-col  lg:items-start">
                <h2 className="text-2xl lg:text-3xl lg:mt-8 lg:mt-0 mb-[40px]    tracking-tight text-center text-secondaryAccent">{whyVoteHeading}</h2>
                   <ul className=" flex flex-col space-y-6">
                        { points.map((point, index) => <div key={index} className="flex items-center space-x-6"><div className="w-[30px]"><div className="rounded-full bg-primaryAccent flex justify-center items-center w-[30px] h-[30px]">
                        <GiCheckMark size={15} color='white'/></div></div>
<li className='text-lg' key={index}>{point}</li></div>)}
                   </ul>
                    <h3 className="mt-[40px]">As well as the bigger issues, I will do everything in my power to address local issues such as:</h3>

                    <ul className="flex flex-col items-start space-y-3 list-disc ml-5 mt-[20px]">
                        <li>Lack of Public Services, GPs</li>
                        <li>Potholes, pavements and constant road works</li>
                        <li>Anti-social behaviour and litter</li>
                        <li>Profit driven housing projects</li>
                        <li>Leisure centre and care home closures</li>
                        <li>Poorly planned bicycle lanes</li>
                       
                    </ul>
                    <p>I&apos;ll have more freedom to hold the Labour run council and other local organisations more accountable by voicing your concerns and campaigning on your behalf.</p>
                </div>
              
          </div> 
    
        </div>
    )
}