'use client'

import {useState, useEffect} from 'react'
import manifesto from '@/app/manifesto'
import FilterRow from './Filter-row';
import { PortableText } from '@portabletext/react';
export default function HowWillIVote({areasOfFocus}){

    const [activeAreaOfFocus, setactiveAreaOfFocus] = useState(areasOfFocus[0]);


    return(
        <div className='bg-gray-50 px-4'>
        <div className='container mx-auto py-[80px] lg:py-[120px]'>
            <h2 className='text-2xl lg:text-3xl lg:mt-8 lg:mt-0 mb-[40px]    tracking-tight text-center text-secondaryAccent lg:text-left'>Once elected, how will I vote on major issues?</h2>
            <div className='grid grid-cols-8 gap-8  lg:pt-[80px]'>
            <FilterRow setactiveAreaOfFocus={setactiveAreaOfFocus} activeAreaOfFocus={activeAreaOfFocus} areasOfFocus={areasOfFocus}/>
            <div className='col-span-8 bg-white p-4 px-4 lg:px-8 pb-8 rounded-lg lg:col-span-6 -mt-[20px] shadow-xl'>
               {
                <PortableText value={activeAreaOfFocus.description}/>
               }
            </div>
            </div>
        </div>
     </div>
    )
}