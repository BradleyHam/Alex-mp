'use client'
import React, { useState } from 'react';
import ButtonPrimary from '@/app/SiteComponents/ButtonPrimary';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm({ nameField, emailField, phoneField, messageField, toVolunteer }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState('Submit');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [captchaToken, setCaptchaToken] = useState('');

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

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
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

        if (!captchaToken) {
            setFeedbackMessage('Please complete the CAPTCHA.');
            return;
        }

        setIsSubmitting(true);
        setButtonText('Sending...');

        const templateParams = {
            from_name: name,
            from_email: email,
            phone,
            message,
            reply_to: email, 
            'g-recaptcha-response': captchaToken,
        };

        console.log(templateParams)

        emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, `${toVolunteer ? process.env.NEXT_PUBLIC_TEMPLATE_ID_VOLUNTEER : process.env.NEXT_PUBLIC_TEMPLATE_ID_GENERAL}`, templateParams, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setButtonText('Sent!');
                setIsSubmitting(false);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setCaptchaToken(''); // Reset the reCAPTCHA
            }, (error) => {
                console.log('FAILED...', error);
                setButtonText('Send');
                setIsSubmitting(false);
                setFeedbackMessage('Failed to send your message. Please try again later.');
            });
    };

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
                <div className="mb-4">
                    <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={handleCaptchaChange}
                    />
                </div>
                <div className='mt-8 mb-8'>
                    <ButtonPrimary text={buttonText} disabled={isSubmitting} />
                </div>
            </form>
            {feedbackMessage && (
                <p className={`mt-0 text-${isSubmitting ? 'blue' : feedbackMessage.includes('successfully') ? 'green' : 'red'}-600`}>
                    {feedbackMessage}
                </p>
            )}
        </div>
    );
}
