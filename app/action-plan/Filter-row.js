import React, { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

export default function FilterRow({ setactiveAreaOfFocus, activeAreaOfFocus, manifestoAreasOfFocus }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelection = (action) => {
        setactiveAreaOfFocus(action);
        setIsOpen(false);
    };

    return (
    <div className='filter-row col-span-8 lg:col-span-2 overflow-x-hidden flex-wrap lg:relative '>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='filter-item flex items-center space-x-2 px-4 py-2 cursor-pointer capitalize activeAction w-[100%] justify-between'
            >
                <span>
                    {activeAreaOfFocus}
                </span>
                <IoChevronDown className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className='absolute mt-2 bg-white border rounded shadow-lg h-[400px] overflow-y-scroll w-[100%] lg:relative'>
                    {manifestoAreasOfFocus.map((action, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelection(action)}
                            className='filter-item px-4 py-2 cursor-pointer capitalize hover:bg-gray-100 hover:text-secondaryAccent'
                        >
                            {action}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
