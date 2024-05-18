import { GiCheckMark } from "react-icons/gi";
import { GoCheckCircleFill } from "react-icons/go";
export default function WhyVoteAlex({points, whyVoteHeading}: {points: string[], whyVoteHeading: string}) {
    return (
        <div className="bg-gray-100 py-[120px]">
            
            {/* <div className="container px-4 lg:px-0 mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:items-center lg:space-x-8 h-screen "> */}
                {/* <div className="image-side lg:flex-1 bg-gray-300 h-[400px] w-full ">
                    
                </div> */}
                <div className="text-side lg:flex-1 lg:order-first max-w-3xl mx-auto">
                <h2 className="text-3xl mt-8 lg:mt-0 mb-8    tracking-tight text-center">{whyVoteHeading}</h2>
                   <ul className=" flex flex-col space-y-6">
                        { points.map((point, index) => <div className="flex items-center space-x-4"><div className="w-[30px]"><GiCheckMark size={25} color='#A3D1B1'/></div>
<li className='text-lg' key={index}>{point}</li></div>)}
                   </ul>
                </div>
            {/* </div> */}
        </div>
    )
}