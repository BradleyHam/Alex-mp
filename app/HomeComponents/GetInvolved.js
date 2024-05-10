'use client'
import {useState} from 'react'
import Vote from './Vote'
import Volunteer from './Volunteer'
import Donate from './Donate'
export default function GetInvolved({heading, donateInstructions, volunteerText, voteInstructions}) {
    const [activeAction, setActiveAction] = useState('vote')
    return (
        <div className="get-involved px-5 py-[80px] w-screen">
            <div className="container mx-auto max-w-4xl">
            <h2 className='mb-[20px] tracking-tight text-lg lg:text-2xl lg:text-center lg:mb-[30px]'>{heading}</h2>
            <div className="filter-row flex space-x-2 lg:w-full lg:justify-center">
                <div className='w-[100px] flex justify-center'>
                <div onClick={()=>setActiveAction('vote')}className={`filter-item px-4   py-2 cursor-pointer capitalize  ${activeAction === 'vote' ? 'activeAction' : ''}`}>vote</div>
                </div>
                <div className='w-[100px] flex justify-center'>
                <div onClick={()=>setActiveAction('volunteer')}className={`filter-item  px-4 py-2 cursor-pointer capitalize ${activeAction === 'volunteer' ? 'activeAction' : ''}`}>volunteer</div>
                </div>
                <div className='w-[100px] flex justify-center'>
                <div onClick={()=>setActiveAction('donate')}className={`filter-item   px-4 py-2 cursor-pointer capitalize ${activeAction === 'donate' ? 'activeAction' : ''}`}>donate</div>
                </div>
            </div>
        
            {activeAction === 'vote' && <Vote voteInstructions={voteInstructions}/>}
            {activeAction === 'volunteer' && <Volunteer volunteerText={volunteerText}/>}
            {activeAction === 'donate' && <Donate donateInstructions={donateInstructions}/>}
            </div>
        </div>
    )
}