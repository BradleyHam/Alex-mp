'use client'
import React, { useState } from 'react';
import ContactForm from '../SiteComponents/ContactForm';
export default function ConnectSection({contactHeading}) {
    return (
        <div className="volunteer px-5 py-[70px] ] w-full">
            <div className="container mx-auto max-w-2xl ">
            <h2 className='font-bold text-lg lg:text-2xl mb-[20px] lg:text-center lg:mb-[30px]'>{contactHeading}</h2>
            <ContactForm nameField emailField messageField/>
            </div>
        </div>
    );
}
