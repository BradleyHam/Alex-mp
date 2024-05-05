'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoClose, IoMenu } from 'react-icons/io5';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        // Listen for scroll events on the window
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <div className={`navbar w-screen ${scrolled ? 'bg-gray-100' : ''} transition-colors duration-300 fixed top-0 right-0 left-0 z-10 h-[80px]  z-50`}>
                <div className="h-full container px-4 mx-auto my-auto flex flex-row justify-between items-center text-white">
                    <div className="navlinks flex items-center h-full">
                        <div className='flex flex-row space-x-6 items-center'>
                            <ul className="flex-row space-x-8 items-center font-lato hidden lg:flex">
                                <Link href="/">
                                    <li className='font-bold'>Home</li>
                                </Link>
                                <Link href="/about">
                                    <li>About Me</li>
                                </Link>
                                <Link href="/about">
                                    <li>Get Involved</li>
                                </Link>
                                <Link href="/about">
                                    <li>News</li>
                                </Link>
                                <Link href="/about">
                                    <li>Contact</li>
                                </Link>
                            </ul>
                            <div onClick={() => setOpen(!open)} className="cursor-pointer lg:hidden">
                                {open ? <IoClose size={30} color='#0a0a0e' /> :   <IoMenu size={30} color='#0a0a0e' />}
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {open && (
                <ul className={'mobile-nav bg-gray-100 flex flex-col items-start space-y-4 px-5 py-10 pt-10 w-screen fixed top-[80px] left-0 z-20  z-50 lg:hidden'}>
                    <Link href="/">
                        <li className='font-bold'>Home</li>
                    </Link>
                    <Link href="/about">
                        <li>About Me</li>
                    </Link>
                    <Link href="/about">
                        <li>Get Involved</li>
                    </Link>
                    <Link href="/about">
                        <li>Contact</li>
                    </Link>
                    <Link href="/about">
                        <li>News</li>
                    </Link>
                </ul>
            )}
        </div>
    )
}
