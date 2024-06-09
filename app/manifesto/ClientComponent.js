'use client';

import { useState, useEffect, useRef } from 'react';
import FilterRow from './Filter-row';
import { PortableText } from '@portabletext/react';

export default function ClientComponent({ areasOfFocus }) {
    const [activeAreaIndex, setActiveAreaIndex] = useState(0);
    const areaOfFocusRef = useRef(null);

    const handleSetActiveAreaOfFocus = (index) => {
        setActiveAreaIndex(index);
        document.querySelectorAll('div[id^="area-"]').forEach((el) => el.classList.add('hidden'));
        document.getElementById(`area-${index}`).classList.remove('hidden');

        if (areaOfFocusRef.current) {
            const offsetTop = areaOfFocusRef.current.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: offsetTop - 100, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // Show the first area by default
        document.getElementById(`area-0`).classList.remove('hidden');
    }, []);

    return (
        <div>
            <FilterRow setActiveAreaOfFocus={handleSetActiveAreaOfFocus} activeAreaIndex={activeAreaIndex} areasOfFocus={areasOfFocus} />
            <div ref={areaOfFocusRef} className='col-span-8 bg-white px-[20px] mx-[5px] lg:px-14 py-12 rounded-lg lg:col-span-6 lg:col-start-2 shadow-xl mt-[40px] mb-[40px]'>
                {areasOfFocus.map((area, index) => (
                    <div key={index} id={`area-${index}`} className='hidden'>
                        <h2 className='text-2xl'>{area.title}</h2>
                        <PortableText value={area.description} />
                    </div>
                ))}
            </div>
            <FilterRow setActiveAreaOfFocus={handleSetActiveAreaOfFocus} activeAreaIndex={activeAreaIndex} areasOfFocus={areasOfFocus} />
        </div>
    );
}
