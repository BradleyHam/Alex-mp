'use client';
import React from 'react';

export default function FilterRow({ setActiveAreaOfFocus, activeAreaIndex, areasOfFocus }) {
   return (
    <div className='filter-row overflow-x-hidden flex-wrap lg:relative flex'>
        {areasOfFocus.map((area, index) => (
           <div key={index} onClick={() => setActiveAreaOfFocus(index)} className={activeAreaIndex === index ? `px-4 py-2 cursor-pointer font-semibold capitalize bg-primaryAccent m-1 rounded` : `px-4 py-2 cursor-pointer capitalize bg-gray-100 m-1 rounded`}>
                {area.title}
           </div>
        ))}
    </div>
   );
}



 // const [isOpen, setIsOpen] = useState(false);

    // const handleSelection = (area) => {
    //     setactiveAreaOfFocus(area);
    //     setIsOpen(false);
    // };

    // return (
    // <div className='filter-row col-span-8 lg:col-span-2 overflow-x-hidden flex-wrap lg:relative '>
    //         <button
    //             onClick={() => setIsOpen(!isOpen)}
    //             className='filter-item flex items-center space-x-2 px-4 py-2 cursor-pointer capitalize activeAction w-[100%] justify-between'
    //         >
    //             <span>
    //                 {activeAreaOfFocus.title}
    //             </span>
    //             <IoChevronDown className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
    //         </button>
    //         {isOpen && (
    //             <div className='absolute mt-2 bg-white border rounded shadow-lg h-[400px] overflow-y-scroll w-[100%] lg:relative'>
    //                 {areasOfFocus.map((area, index) => (
    //                     <div
    //                         key={index}
    //                         onClick={() => handleSelection(area)}
    //                         className='filter-item px-4 py-2 cursor-pointer capitalize hover:bg-gray-100 hover:text-secondaryAccent'
    //                     >
    //                         {area.title}
    //                     </div>
    //                 ))}
    //             </div>
    //         )}
    //     </div>
    // );