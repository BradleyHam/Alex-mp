import ClientComponent from './ClientComponent';
import { PortableText } from '@portabletext/react';

export default function HowWillIVote({ areasOfFocus }) {
    return (
        <div className='bg-gray-50 py-[80px] px-[5px]'>
            <div className='container max-w-4xl mx-auto'>
                <ClientComponent areasOfFocus={areasOfFocus} />
            </div>
        </div>
    );
}
