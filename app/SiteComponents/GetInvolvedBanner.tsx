import ButtonPrimary from "./ButtonPrimary";

export default function GetInvolvedBanner (){
    return(
        <div className=" px-4 py-[80px] bg-gradient-to-r from-[#A7D2B2] to-[#C2E0CC] w-screen">
            <div className="container flex items-center justify-center mx-auto space-x-4">
                <h2 className="tracking-tight text-xl lg:text-2xl">Keen to help?</h2>
                <ButtonPrimary text={'Get Involved'}/>
            </div>
        </div>
    )
}