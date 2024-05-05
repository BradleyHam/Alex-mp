import SecondaryButton from "../SiteComponents/SecondaryButton";
import Image from 'next/image'
export default function NewsArticleCard({image, title, description, date}) {

    return (
        <div className="news-article-card  bg-white px-4 py-4 border rounded-lg mt-4 flex-1">
           <div className='container flex flex-col'>
            <div className="image  h-[200px] w-full relative">
                <Image src={`${image}`} layout='fill' objectFit='cover' alt='something'/>
            </div>
            <div className="news-car-content flex items-start justify-between mt-4 "> 
            <div className="left-side">
            <h3 className="text-base">{title}</h3>
            <p className="mt-1 text-base">{description}</p>
            </div>
            <div className="date-created font-primary text-sm font-semibold mt-1 italic">
                {date}
            </div>
            </div>
           
            <SecondaryButton text="read more" />
            </div>
        </div>
    )
}