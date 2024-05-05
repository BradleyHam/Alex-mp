import { FaArrowRight } from "react-icons/fa6";

export default function SecondaryButton({text}){

    return (
        <button className="py-4 italic  font-bold flex items-center space-x-2  "><p className="text-base">{text}</p> <FaArrowRight /></button>
    )
}