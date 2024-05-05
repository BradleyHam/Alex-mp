import { FaArrowRightLong } from "react-icons/fa6";


export default function ButtonPrimary({text}: {text: string}) {
    return (
        <button className="py-3 px-6 rounded-full bg-secondaryAccent shadow-xl flex items-center space-x-2 text-white text-sm"><p className="text-white text-base  font-semibold">{text}</p><FaArrowRightLong /></button>
    )
}