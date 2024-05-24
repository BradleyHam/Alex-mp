'use client'
import React, { useState } from 'react';
import ContactForm from '../SiteComponents/ContactForm';
export default function ConnectSection({contactHeading}) {
    return (
        <div className="volunteer px-5 py-[80px] ] w-full bg-white">
            <div className="container mx-auto max-w-2xl ">
            <h2 className='text-2xl lg:text-3xl lg:mt-8 lg:mt-0 mb-[40px]    tracking-tight text-center lg:text-left text-secondaryAccent'>{contactHeading}</h2>
            <ContactForm nameField emailField messageField/>
            </div>
        </div>
    );
}
