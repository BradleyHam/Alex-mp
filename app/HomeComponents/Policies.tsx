import { BsGraphUpArrow } from "react-icons/bs";
import Accordion from "./Accordion";
import { TbHeartbeat } from "react-icons/tb";
import { LuLeaf } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";

const iconSize = 25;
const iconColor = '#53212F';
const policies = [
    {   
        icon: <BsGraphUpArrow size={iconSize} color={iconColor} />,
        title: "Revitalizing Our Economy",
        problem: 'Economic inequality is rising, with small businesses struggling and wages stagnating',
        proposedSolution: 'Alex will enforce fair taxation, support entrepreneurial ventures, and ensure a living wage to create a more balanced economy.',
    },
    {   
        icon: <TbHeartbeat size={iconSize + 5} color={iconColor}/>,
        title: "Strengthening Healthcare",
        problem: 'NHS privatisation has led to fragmented services and longer waiting times for patients.',
        proposedSolution: 'Alex advocates for a fully public NHS to ensure comprehensive, holistic healthcare services for all residents.',
    },
    {   
        icon: <LuLeaf size={iconSize} color={iconColor}/>,
        title: "Green Future",
        problem: 'Environmental degradation is accelerating, with inadequate responses from current policies.',
        proposedSolution: ' Implement sustainable practices and push for significant investment in green technologies to protect our natural resources.',
    },
    {   
        icon: <RiGraduationCapLine size={iconSize} color={iconColor}/>,
        title: "Enhancing Education",
        problem: 'Underfunding and overcrowding in schools have led to declining educational standards.',
        proposedSolution: 'Increase funding for schools, reduce class sizes, and support teachers with better resources and training.',
    },
    {   
        icon: <GrGroup size={iconSize} color={iconColor}/>,
        title: "Focused on Edinburgh South",
        problem: 'Local issues such as inadequate public services and poor infrastructure are negatively impacting quality of life.',
        proposedSolution: 'Alex will work to improve local services, enhance infrastructure, and ensure effective governance at the local level.',
    },
  

]
export default function Policies(){
    return (
        <div className="policies px-5 lg:px-0 py-[80px] bg-gray-50 w-screen">
            <div className="container mx-auto lg:max-w-4xl">
            <h2 className="mb-[20px] font-bold text-lg lg:text-2xl tracking-tight mb-[24px]">What we stand for!</h2>
           <div className="w-full">
            <Accordion items={policies}/>
            </div>
            </div>
        </div>
    )
}