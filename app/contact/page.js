import React from 'react';
import SecondaryButton from '../SiteComponents/SecondaryButton';
import GetInvolvedBanner from '../SiteComponents/GetInvolvedBanner';
import Navbar from '../SiteComponents/Navbar';
import Footer from '@/app/SiteComponents/Footer'
import { getContactPage } from '@/sanity/utils';
import ContactForm from '@/app/SiteComponents/ContactForm';
import { PortableText } from '@portabletext/react';

export default async function Contact(){
    const pageContent = await getContactPage();

    return(
        <div>
            <Navbar/>
            <div className="pt-[160px]">
                <div className="container mx-auto px-4">
                  <h1 className="text-2xl lg:text-3xl font-bold tracking-tight ">{pageContent.contactPageHeading}</h1>
                  <div className="lg:px-0">
                    <PortableText value={pageContent.contactDetails} />
                </div>
                </div>
            </div>
            <div className="contact-form-section bg-gray-50 mt-[80px] px-5 py-[70px] ] w-full">
            <div className="container mx-auto max-w-2xl">
            <h2 className='font-bold text-lg lg:text-2xl mb-[20px] lg:text-left lg:mb-[30px]'>{pageContent.contactFormHeading}</h2>
        
            <ContactForm nameField emailField messageField formFor='general message'/>
            </div>
        </div>
        <GetInvolvedBanner />
        <Footer />
        </div>
    )
}