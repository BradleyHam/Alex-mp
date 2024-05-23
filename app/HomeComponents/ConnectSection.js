'use client'
import React, { useState } from 'react';
import ContactForm from '../SiteComponents/ContactForm';
export default function ConnectSection({contactHeading}) {
    return (
        <div className="volunteer px-5 py-[70px] ] w-full bg-gray-50">
            <div className="container mx-auto max-w-2xl ">
            <h2 className='lg:text-3xl mt-8 lg:mt-0 mb-8    tracking-tight  text-secondaryAccent'>{contactHeading}</h2>
            <ContactForm nameField emailField messageField/>
            </div>
        </div>
    );
}
