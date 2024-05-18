import SecondaryButton from "../SiteComponents/SecondaryButton";
import Link from "next/link"
export default function Donate({donateInstructions, linkToDonate}) {
    console.log('link to donate', linkToDonate)
    return (
        <div className="donate container px-5 py-[40px] border border-gray-300 rounded-lg mt-4">
            <p className="text-base">{donateInstructions} 
            </p>
            <Link href={linkToDonate}>
             <SecondaryButton text={'Donate now'}/>
            </Link>
        </div>
    )
}