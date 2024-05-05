'use client'
import React, { useState } from 'react';
import SecondaryButton from '../SiteComponents/SecondaryButton';

export default function ConnectSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState('Send');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setButtonText('Sending...');
        // Simulate an API call
        setTimeout(() => {
            console.log('Form Submitted with:', { name, email, message });
            setIsSubmitting(false);
            setButtonText('Sent');
            // Reset button text after a delay
            setTimeout(() => {
                setButtonText('Send');
            }, 2000);
        }, 2000);
    };

    return (
        <div className="volunteer px-5 py-[70px] ] w-full">
            <div className="container mx-auto max-w-2xl ">
            <h2 className='font-bold text-lg lg:text-2xl mb-[20px] lg:text-center lg:mb-[30px]'>We&apos;d love to hear from you... let&apos;s connect!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="mb-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                value={name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="mb-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    value={email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="mb-4 block w-full px-4 py-2 border border-gray-300 rounded-md"
                    value={message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    rows="4"
                />
                <SecondaryButton text={buttonText} disabled={isSubmitting} />
            </form>
            </div>
        </div>
    );
}
