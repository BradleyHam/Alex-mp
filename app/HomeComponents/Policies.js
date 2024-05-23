import { BsGraphUpArrow } from "react-icons/bs";
import Accordion from "./Accordion";
import { TbHeartbeat } from "react-icons/tb";
import { LuLeaf } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";

const iconSize = 25;
const iconColor = '#53212F';

export default function Policies({areasOfFocus, areasOfFocusHeading}) {
    
    const policies = [
        {   
            icon: <BsGraphUpArrow size={iconSize} color={iconColor} />,
            title: areasOfFocus[0].areaOfFocus,
            problem: areasOfFocus[0].problemDescription,
            proposedSolution: areasOfFocus[0].proposedSolutionDescription,
        },
        {   
            icon: <TbHeartbeat size={iconSize + 5} color={iconColor}/>,
            title: areasOfFocus[1].areaOfFocus,
            problem: areasOfFocus[1].problemDescription,
            proposedSolution: areasOfFocus[1].proposedSolutionDescription,
        },
        {   
            icon: <LuLeaf size={iconSize} color={iconColor}/>,
            title: areasOfFocus[2].areaOfFocus,
            problem: areasOfFocus[2].problemDescription,
            proposedSolution: areasOfFocus[2].proposedSolutionDescription,
        },
        {   
            icon: <RiGraduationCapLine size={iconSize} color={iconColor}/>,
            title: areasOfFocus[3].areaOfFocus,
            problem: areasOfFocus[3].problemDescription,
            proposedSolution: areasOfFocus[3].proposedSolutionDescription,
        },
        {   
            icon: <GrGroup size={iconSize} color={iconColor}/>,
            title: areasOfFocus[4].areaOfFocus,
            problem: areasOfFocus[4].problemDescription,
            proposedSolution: areasOfFocus[4].proposedSolutionDescription,
        },
      
    
    ]
    return (
        <div className="policies px-5 lg:px-0 py-[80px] bg-white w-screen">
            <div className="container mx-auto lg:max-w-4xl">
            <h2 className="lg:text-3xl mt-8 lg:mt-0 mb-8    tracking-tight  text-secondaryAccent">{areasOfFocusHeading}</h2>
           <div className="w-full">
            <Accordion items={policies}/>
            </div>
            </div>
        </div>
    )
}