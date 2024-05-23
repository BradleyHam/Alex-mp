'use client'
import { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";

export default function ButtonPrimary({text}) {


    useEffect(() => {
     
    }, []);

    return (
        <button className="py-3 px-6 rounded-full bg-secondaryAccent shadow-lg flex items-center space-x-2 text-white text-sm text-white text-base font-semibold hover:-translate-y-[2px] active:translate-y-0 transition-transform shadow transition-shadow duration-200 ease-in-out hover:shadow-xl active:shadow-md">
            <span className="text-base">{text}</span>
            <FaArrowRightLong  />
        </button>
    );
}