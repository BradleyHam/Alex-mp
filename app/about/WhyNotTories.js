import { ImCross } from "react-icons/im";

export default function WhyNotTories({whyNotLabour}) {

    return (
        <div className="bg-gray-50 w-screen py-[120px]">
 
            <div className="text-side lg:flex-1 max-w-3xl mx-auto px-5 lg:px-10 ">
            <h2 className="lg:text-3xl mt-8 lg:mt-0 mb-8    tracking-tight  text-secondaryAccent">Why not to vote for Labour</h2>
               <ul className="flex flex-col space-y-6">
                    { whyNotLabour.map((point, index) =>  <div key={index} className="flex items-center space-x-4"><div className="w-[30px]"><ImCross size={25} color='#53212F'/></div>
<li className='text-lg' key={index}>{point.description}</li></div>)}
               </ul>
            </div>
    </div>
    )
}

