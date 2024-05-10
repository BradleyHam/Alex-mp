import SecondaryButton from "../SiteComponents/SecondaryButton";

export default function vote({voteInstructions}) {

    return (
        <div className="vote container px-5 py-[40px] border border-gray-300 rounded-lg mt-4">
            <p className="text-base">{voteInstructions} <SecondaryButton text={'Link to site'}/></p>
        </div>
    )
}