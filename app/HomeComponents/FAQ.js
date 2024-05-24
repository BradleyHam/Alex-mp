'use client'
import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

// Define a simple array of FAQs
const faqData = [
  {
    question: "What impact can I have as an independent politician?",
    answer: "We are facing either a hung parliament, or slim Labour majority in this general election. Independent politicians and smaller parties will have significant influence by forming alliances on certain issues, and withholding votes."
  },
  {
    question: "Why run as an independent candidate and not under one of the major parties?",
    answer: "I will not be subject to the party whip, so I can vote in the best interests of my constituents. Not according to party loyalties."
  },
  {
    question: "What is my stance on Scottish Independence?",
    answer: "I will ensure that free and fair debate takes place, ensuring that voters can make their own decision about their future as a nation, supporting their right to self-determination."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 w-full px-5 py-[80px] bg-gray-50">
        <div className='lg:max-w-[70%] container mx-auto'>
      <h2 className="text-2xl lg:text-3xl lg:mt-8 lg:mt-0 mb-[40px]    tracking-tight text-center text-secondaryAccent lg:text-left">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div onClick={() => toggleFAQ(index)} key={index} className="mb-4 cursor-pointer">
          <hr className="border-gray-300 my-4" />
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-brand-blue mr-4">
              {faq.question}
            </h3>
            <div className='w-[10px]'>
              <FaChevronUp size={20} className={`${activeIndex === index ? 'rotate-180' : 'rotate-0'} transition-all duration-300 ease-in-out`} />
            </div>
          </div>
          <div className={`${activeIndex === index ? 'block' : 'hidden'} text-gray-600 mt-4`}>
            {typeof faq.answer === 'string' ? (
              faq.answer
            ) : (
              <>
                <ul className="list-disc ml-5">
                  {faq.answer.points.map((point, i) => (
                    <li className='mt-2' key={i}>{point}</li>
                  ))}
                </ul>
                <p className="mt-4">{faq.answer.paragraph}</p>
              </>
            )}
          </div>
        </div>
      ))}
      <hr className="border-gray-300 my-4" />
      </div>
    </div>
  );
};

export default FAQ;
