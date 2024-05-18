import SecondaryButton from "../SiteComponents/SecondaryButton";
import Link from "next/link"

export default function vote({voteInstructions, linkToVote}: {voteInstructions:string, linkToVote:string}) {

    return (
        <div className="vote container px-5 py-[40px] border border-gray-300 rounded-lg mt-4">
            <p className="text-base">{voteInstructions}
            <Link href={linkToVote}>
                <SecondaryButton arrow={false} text={'Vote now'}/>
             </Link>
            </p>
        </div>
    )
}