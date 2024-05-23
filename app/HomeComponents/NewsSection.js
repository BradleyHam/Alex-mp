import NewsArticleCard from "./NewsArticleCard";
import SecondaryButton from "../SiteComponents/SecondaryButton";
import Link from 'next/link'


export default function News({newsHeading, newsPosts}){

    return (
        <div className="news w-full px-5 py-[80px] bg-gray-50">
            <div className="container mx-auto ">
            <h2 className="text-lg lg:text-2xl lg:text-center lg:mb-[30px]">{newsHeading}</h2>
            <div className="flex flex-col items-center items-stretch lg:flex-row lg:justify-between lg:space-x-4">
                {
                    newsPosts.map((article, index) => <NewsArticleCard key={index} slug={article.slug} image={article.postImage} title={article.postTitle} description={article.shortDescription} date={article.date}/>)
                }
            </div>
            <div className="mx-auto text-center w-full flex justify-center mt-8">
           <Link href='/news'>
                 <SecondaryButton text='See all posts' arrow/>
             </Link>
            </div>
            </div>
        </div>
    )
}