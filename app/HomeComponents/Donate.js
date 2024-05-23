import SecondaryButton from "../SiteComponents/SecondaryButton";
import Link from "next/link"
import ButtonPrimary from "../SiteComponents/ButtonPrimary";
export default function Donate({donateInstructions, linkToDonate}) {
    console.log('link to donate', linkToDonate)
    return (
        <div className="donate container px-5 lg:px-10 py-[20px] border border-gray-300 rounded-lg mt-4">
            <p className="text-base lg:text-lg mb-8 opacity-80">Support our campaign and make a difference in Edinburgh South! Your donation will help us bring integrity, honesty, and a strong commitment to the community back into politics. Together, we can build a fairer society, protect our environment, and ensure that the voices of the people are heard. Every contribution, no matter how small, makes a significant impact. Click here to donate and join us in driving real change for a better future!
            </p>
            <div className="mb-4">
                <Link href={linkToDonate}>
                    <ButtonPrimary text='donate now' />
                </Link>
            </div>
        </div>
    )
}