import React from 'react';
import { FaArrowRight} from 'react-icons/fa6';
import ContactForm from '../SiteComponents/ContactForm';

export default function Volunteer({volunteerHeading}) {



    return (
        <div className="volunteer container px-5 lg:px-10 py-[20px] border border-gray-300 rounded-lg mt-4">
            <p className="text-base lg:text-lg opacity-80 mb-4">{volunteerHeading}</p>
            <ContactForm nameField emailField phoneField toVolunteer={true}/>
        </div>
    );
}

