'use client'
import React, { useState } from 'react';
import SecondaryButton from '../SiteComponents/SecondaryButton';
import emailjs from 'emailjs-com';

export default function ContactForm({ nameField, emailField, phoneField, messageField, toVolunteer }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState('Send');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'phone') {
            setPhone(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFeedbackMessage(''); // Clear any previous feedback message

        if (!name || !email) {
            setFeedbackMessage('Name and Email are required fields.');
            return;
        }

        if (!validateEmail(email)) {
            setFeedbackMessage('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);
        setButtonText('Sending...');

        const templateParams = {
            from_name: name,
            from_email: email,
            phone,
            message,
            to_email: 'info@alexmartinmp.co.uk'
        };

        console.log(templateParams)

    //     emailjs.send('service_1g86gix', `${toVolunteer ? 'template_v18snvp' : 'template_dx6ucri'}`, templateParams, 'AjNIKXDaQ8o1OP17y')
    //         .then((response) => {
    //             console.log('SUCCESS!', response.status, response.text);
    //             setButtonText('Sent!');
    //             setIsSubmitting(false);
    //             setName('');
    //             setEmail('');
    //             setPhone('');
    //             setMessage('');
    //         }, (error) => {
    //             console.log('FAILED...', error);
    //             setButtonText('Send');
    //             setIsSubmitting(false);
    //             setFeedbackMessage('Failed to send your message. Please try again later.');
    //         });
    // };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {nameField && (
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="mb-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        value={name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        required
                    />
                )}
                {emailField && (
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="mb-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        value={email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        required
                    />
                )}
                {phoneField && (
                    <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone"
                        className="mb-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        value={phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                    />
                )}
                {messageField && (
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="mb-4 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        value={message}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        rows="4"
                    />
                )}
                <SecondaryButton text={buttonText} disabled={isSubmitting} />
            </form>
            {feedbackMessage && (
                <p className={`mt-0 text-${isSubmitting ? 'blue' : feedbackMessage.includes('successfully') ? 'green' : 'red'}-600`}>
                    {feedbackMessage}
                </p>
            )}
        </div>
    );
}
