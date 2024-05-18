import NewsArticleCard from "@/app/HomeComponents/NewsArticleCard";
import {getNewsPosts} from "@/sanity/utils";
import Navbar from "@/app/SiteComponents/Navbar";
import GetInvolvedBanner from "@/app/SiteComponents/GetInvolvedBanner";
import Footer from "@/app/SiteComponents/Footer";

export default async function News(){

    const newsData = await getNewsPosts();

    return (
        <div>
        <Navbar />
        <div className="news w-full px-5 py-[80px] bg-gray-50">
            <div className="container mx-auto pt-[80px]">
            <h2 className="text-lg lg:text-2xl lg:text-left lg:mb-[30px]">Keep up to date with our news </h2>
          
            <div className="flex flex-col flex-wrap items-center items-stretch lg:grid lg:grid-cols-3 lg:gap-4">
                {
                    newsData.map((article, index) => <NewsArticleCard key={index} image={article.postImage ? article.postImage : ''}  title={article.postTitle} date={article.date} slug={article.slug} description={article.shortDescription}/>)
                }
            </div>
            </div>
        </div>
        <GetInvolvedBanner />
        <Footer />
        </div>
    )
}