'use client'
import {useState} from 'react'
import Vote from './Vote'
import Volunteer from './Volunteer'
import Donate from './Donate'
export default function GetInvolved({heading, donateInstructions, volunteerHeading, voteInstructions, linkToVote, linkToDonate}) {
    const [activeAction, setActiveAction] = useState('volunteer')
    const actions = [ 'volunteer', 'donate']
    return (
        <div className="get-involved px-5 py-[80px] w-screen">
            <div className="container mx-auto max-w-4xl">
           
            <div className="filter-row flex space-x-2 lg:w-full ">
                {actions.map((action) => {
                    return <div key={action} onClick={() => setActiveAction(action)} className={`filter-item px-4 py-2 cursor-pointer capitalize ${activeAction === action ? 'activeAction' : ''}`}>{action}</div>
                })}
            </div>
        
            {activeAction === 'vote' && <Vote voteInstructions={voteInstructions} linkToVote={linkToVote}/>}
            {activeAction === 'volunteer' && <Volunteer volunteerHeading={volunteerHeading}/>}
            {activeAction === 'donate' && <Donate donateInstructions={donateInstructions} linkToDonate={linkToDonate}/>}
            </div>
        </div>
    )
}

