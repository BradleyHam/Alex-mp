import Navbar from '@/app/SiteComponents/Navbar'
import Footer from '@/app/SiteComponents/Footer'
export default function getInvolved(){
    return (
        <div>
            <Navbar />
            <div className='mt-[80px]'>
                <div className='container mx-auto px-4'>
                  <h1>Get Involved</h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}