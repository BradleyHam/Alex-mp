import { FaArrowRight } from "react-icons/fa6";

export default function SecondaryButton({text, arrow}: {text: string, arrow:boolean}) {

    return (
        <button className="py-4 italic  font-bold flex items-center space-x-2  mt-0"><p className="text-base mt-0">{text}</p> {arrow && <FaArrowRight />}</button>
    )
}