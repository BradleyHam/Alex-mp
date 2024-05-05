import SecondaryButton from "../SiteComponents/SecondaryButton";

export default function vote() {

    return (
        <div className="vote container px-5 py-[40px] border border-gray-300 rounded-lg mt-4">
            <p className="text-base">Some instuctions on how to vote go here <SecondaryButton text={'Link to site'}/></p>
        </div>
    )
}