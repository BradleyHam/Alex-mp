import { GiCheckMark } from "react-icons/gi";
import { GoCheckCircleFill } from "react-icons/go";
import Link from "next/link";
import SecondaryButton from "../SiteComponents/SecondaryButton";
import Image from "next/image";
export default function WhyVoteAlex({points, whyVoteHeading}: {points: string[], whyVoteHeading: string}) {
    return (
        <div className="bg-white py-[120px] w-full">
            
            <div className="container px-4 lg:px-0 mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-14 lg:items-start lg:space-x-8 "> 
                <div className="image-side  w-full ">
                    <div className="  h-[400px]  ">
                        <div className="relative h-full w-full p-2">
                         <Image src='/images/alex-mp-7.jpeg'  layout='fill'  alt='something' objectPosition="top" objectFit='cover'/> 
                        </div>
                    </div>
                    <p className="quote-one italic text-xl font-light opacity-80"><span className="text-3xl font-bold text-primaryAccent">"</span>I'm dismayed by the quality of many elected representatives. I want to bring honesty, integrity,
and selfless commitment, back into politics<span className="text-3xl font-bold text-primaryAccent">"</span></p>
                    <p className="quote-two italic text-xl font-light opacity-80"><span className="text-3xl font-bold text-primaryAccent">"</span>This is the constituency I live in,
and I have a deep affection for
the city of Edinburgh,
where I call home<span className="text-3xl font-bold text-primaryAccent">"</span></p>
                </div>
                <div className="text-side lg:flex-1 order-first max-w-3xl mx-auto flex flex-col items-start">
                <h2 className="lg:text-3xl mt-8 lg:mt-0 mb-8    tracking-tight text-center text-secondaryAccent">{whyVoteHeading}</h2>
                   <ul className=" flex flex-col space-y-6">
                        { points.map((point, index) => <div key={index} className="flex items-center space-x-4"><div className="w-[30px]"><div className="rounded-full bg-primaryAccent flex justify-center items-center w-[30px] h-[30px]">
                        <GiCheckMark size={15} color='white'/></div></div>
<li className='text-lg opacity-70' key={index}>{point}</li></div>)}
                   </ul>
                 
                </div>
              
          </div> 
    
        </div>
    )
}