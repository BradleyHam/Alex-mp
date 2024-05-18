import { FaArrowRightLong } from "react-icons/fa6";


export default function ButtonPrimary({text}: {text: string}) {
    return (
        <button className="py-3 px-6 rounded-full bg-secondaryAccent shadow-xl flex items-center space-x-2 text-white text-sm text-white text-base  font-semibold "> <span className="text-base">{text} </span><FaArrowRightLong /></button>
    )
}