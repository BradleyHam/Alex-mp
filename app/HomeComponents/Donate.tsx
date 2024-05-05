import SecondaryButton from "../SiteComponents/SecondaryButton";

export default function Donate(){

    return (
        <div className="donate container px-5 py-[40px] border border-gray-300 rounded-lg mt-4">
            <p className="text-base">Some instuctions on how to donate go here <SecondaryButton text={'Link to donate'}/></p>
        </div>
    )
}