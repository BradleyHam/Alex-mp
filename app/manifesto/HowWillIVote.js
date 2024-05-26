'use client'

import { useState, useEffect, useRef } from 'react'
import FilterRow from './Filter-row';
import { PortableText } from '@portabletext/react';

export default function HowWillIVote({ areasOfFocus }) {

    const [activeAreaOfFocus, setActiveAreaOfFocus] = useState(areasOfFocus[0]);
    const areaOfFocusRef = useRef(null);
    const [hasUserInteracted, setHasUserInteracted] = useState(false);

    const handleSetActiveAreaOfFocus = (focus) => {
        setActiveAreaOfFocus(focus);
        setHasUserInteracted(true);
    };

    useEffect(() => {
        if (hasUserInteracted && areaOfFocusRef.current) {
            const offsetTop = areaOfFocusRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: offsetTop - 100, behavior: 'smooth' });
        }
    }, [activeAreaOfFocus, hasUserInteracted]);

    return (
        <div className='bg-gray-50 px-4'>
            <div className='container mx-auto py-[80px] lg:pb-[120px] lg:max-w-4xl  '>
                <h2 className='text-2xl lg:text-3xl lg:mt-8 lg:mt-0 mb-[40px] tracking-tight text-center text-secondaryAccent lg:text-left'>
                    Once elected, how will I vote on major issues?
                </h2>
                <div className=' '>
                    <FilterRow setactiveAreaOfFocus={handleSetActiveAreaOfFocus} activeAreaOfFocus={activeAreaOfFocus} areasOfFocus={areasOfFocus} />
                    <div ref={areaOfFocusRef} className='col-span-8 bg-white p-4 lg:px-14 lg:py-8 pb-8 rounded-lg lg:col-span-6 lg:col-start-2 shadow-xl mt-[40px] mb-[40px]'>
                        <h2 className='text-2xl pt-6'>{activeAreaOfFocus.title}</h2>
                        <PortableText value={activeAreaOfFocus.description} />
                    </div>
                    <FilterRow setactiveAreaOfFocus={handleSetActiveAreaOfFocus} activeAreaOfFocus={activeAreaOfFocus} areasOfFocus={areasOfFocus} />
                </div>
            </div>
        </div>
    );
}
