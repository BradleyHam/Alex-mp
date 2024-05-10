import SecondaryButton from "../SiteComponents/SecondaryButton";

export default function Donate({donateInstructions}) {

    return (
        <div className="donate container px-5 py-[40px] border border-gray-300 rounded-lg mt-4">
            <p className="text-base">{donateInstructions} <SecondaryButton text={'Link to donate'}/></p>
        </div>
    )
}