'use client'
import React, { useState } from 'react'
import { FaArrowRight, FaChevronDown } from 'react-icons/fa6'
import SecondaryButton from '../SiteComponents/SecondaryButton'
import Link from 'next/link'

function Accordion({ items }) {
  const [currentIndex, setCurrentIndex] = useState(null)

  const handleClick = (index) => {
    setCurrentIndex(currentIndex === index ? null : index)
  }

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} onClick={() => handleClick(index)}  className={`w-full mb-2 cursor-pointer group p-4 text-left border-2 bg-white  border-gray-300 hover:border-primaryAccent rounded focus:outline-none `}>
          <div className={`flex flex-row justify-between items-center ${currentIndex === index ? 'mb-8' : ''}`}
          > 
          <div className="accordion-header-left-group flex items-center space-x-4">
            {item.icon}
            <h3 className={`font-medium group-hover:text-secondaryAccent text-base hover:text-secondaryAccent`}>
            {item.title}
            </h3>
            </div>
            <div className={`transform-chevron-180 ${index === currentIndex ? 'rotate-180' : ''}`}>
              <FaChevronDown arrow/>
            </div>
          </div>
          {currentIndex === index && (
            <div className="">
              <div className="problem-container mb-[20px]">
                  <h4 className='font-bold'>Problem</h4>
                  <p className='font-md text-base opacity-80 mt-2'>{item.problem}</p>
              </div>
              <div className="proposed-solution-container">
                <h4>Proposed Solution</h4>
                <p className='text-base opacity-80 mt-2'>{item.proposedSolution}</p>
              </div>
              <Link href={'/manifesto'}>
                <SecondaryButton text='Learn more' arrow/>
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion

