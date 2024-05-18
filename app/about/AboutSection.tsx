import Image from 'next/image'

export default function AboutSection({aboutTitle, about, image}: {aboutTitle: string, about : string, image: string}) {
   
    return (
       <div className="about flex h-screen lg:-mt-[80px] mb-[80px] mt-[40px] px-4 lg:px-0">
        <div className="container mx-auto flex flex-col lg:flex lg:flex-row lg:space-x-4 mx-auto my-auto items-center relative">
            <div className="text-side flex-1 lg:ml-8">
                <h2 className="text-3xl mt-8 mb-4">{aboutTitle}</h2>
                <p className='text-lg'>{about}</p>
            </div>
            <div className="p-2 bg-gray-200 shadow-2xl lg:flex-1 order-first w-[100%] ">
            <div className="image-sidelg:mr-4 relative lg:flex-1 h-[400px] w-[100%] order-first">
                <Image src={image}  layout='fill' objectFit='cover' alt='something'/>
            </div>
          </div>
          </div>
       </div>
    )
}