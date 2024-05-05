import React, { useState } from 'react';
import { FaArrowRight} from 'react-icons/fa6';

export default function Volunteer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [buttonText, setButtonText] = useState('Send');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setButtonText('Sending...');
        // Simulate an API call
        setTimeout(() => {
            console.log('Form Submitted with:', { name, email });
            setIsSubmitting(false);
            setButtonText('Sent');
            // Reset button text after a delay
            setTimeout(() => {
                setButtonText('Send');
            }, 2000);
        }, 2000);
    };

    return (
        <div className="volunteer container px-5 py-[40px] border border-gray-300 rounded-lg mt-4">
            <p className="text-base mb-4">Keen to help? <span className='italic'> Let&apos;s connect! </span></p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="text-sm mb-4 mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md"
                    value={name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="text-sm mb-4 block w-full px-4 py-3 border border-gray-300 rounded-md"
                    value={email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                />
                <button
                    type="submit"
                    className="flex items-center space-x-2 text-secondaryAccent font-bold rounded-md  py-2 "
                    disabled={isSubmitting}
                >
                   <p className='text-base tracking-tight italic'> {buttonText} </p> <FaArrowRight size={14}/>
                </button>
            </form>
        </div>
    );
}

