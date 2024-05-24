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
                <div className="container mx-auto px-5 pb-[80px]">
                  <h2 className="text-2xl lg:text-3xl lg:mt-8 lg:mt-0 mb-[30px]    tracking-tight text-secondaryAccent lg:text-left ">{pageContent.contactPageHeading}</h2>
                  <div className="lg:px-0 leading-loose lg:leading-loose">
                    <PortableText value={pageContent.contactDetails} />
                </div>
                </div>
            </div>
            <div className="contact-form-section bg-gray-50 px-5 py-[80px] w-full">
            <div className="container mx-auto max-w-2xl">
            <h2 className='text-2xl lg:text-3xl lg:mt-8 lg:mt-0 mb-[40px]    tracking-tight  text-secondaryAccent lg:text-left'>{pageContent.contactFormHeading}</h2>
                <ContactForm nameField emailField messageField formFor='general message'/>
            </div>
        </div>
        <GetInvolvedBanner />
        <Footer />
        </div>
    )
}