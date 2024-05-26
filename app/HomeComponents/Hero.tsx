import Image from "next/image"
import ButtonPrimary from "../SiteComponents/ButtonPrimary"
import Link from "next/link"

export default function Hero(){

    return (
        <div className="hero-top-level  h-screen w-screen relative flex flex-col justify-end">
                    <div className="hero-overlay"></div>
                <div className="container z-10 mx-auto">
                <div className="hero-text z-20 px-5 pb-[120px] lg:pb-[120px]  ">
                    <h1 className="hero-title  text-xl lg:text-2xl lg:leading-snug font-primary"><strong className="tracking-tight"> Alexander Martin:</strong>
                    <br /><span className="tracking-regular "> A Fresh, Independent Voice Working for a</span> <br /><span className=" span tracking-tight font-semibold"> Fairer Edinburgh South. </span></h1>
                    <Link href='/get-involved'>
                        <ButtonPrimary text='Get involved'/>
                    </Link>
                </div>
                </div>
        </div>
    )
}