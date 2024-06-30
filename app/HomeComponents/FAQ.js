'use client'
import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

// Define a simple array of FAQs
const faqData = [
  {
    question: "What impact can I have as an independent politician?",
    answer: `I will use my free voice and public platform to campaign fearlessly for issues which matter to you. 

    There are many examples of lone politicians making significant change in British political history. 
    
    I will bring people together around certain causes, run petitions, organise actions and hold officials to account on your behalf. 
    
    I plan to lead all-party initiatives and push for greater transparency on local and national Government spending.`
  },
  {
    question: "Why run as an independent candidate and not under one of the major parties?",
    answer: "I will not be subject to the party whip, so I can vote in the best interests of my constituents. Not according to party loyalties."
  },
  {
    question: "What is my stance on Scottish Independence?",
    answer: "I will ensure that free and fair debate takes place, ensuring that voters can make their own decision about their future as a nation, supporting their right to self-determination."
  },
  {
    question: "What are my views on sex, gender and equality? ",
    answer: `I believe in equal rights and responsibilities for all citizens. Regardless of which category they fit into. 

    I believe civil liberties should be defended all the way until the liberty of one individual affects the civil liberties of others. 
    
    I believe every minority group which is being unfairly treated, made unsafe or discriminated against should be protected. 
    
    These are the core principles from which I approach the current debates on these issues. 
    
    Regarding contentious or divisive issues more broadly, I always endeavour to approach the debate from a place of common humanity, empathy and understanding.`
  },
  {
    question: "How are you funding your campaign? ",
    answer: `My campaign is fully self funded and every one of our 30+ volunteers are entirely unpaid. They are helping me because they believe in what I'm trying to accomplish for Edinburgh South. I am not beholden to any external funding structures or special interest groups.`
  },
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
