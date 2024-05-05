import NewsArticleCard from "./NewsArticleCard";

const newsArticles =[
    {
        image: '/images/news-one.jpeg',
        title: 'Article title',
        description: 'Short description one',
        date: '2 days ago'
    },
    {
        image: '/images/news-two.jpg',
        title: 'Article title Two',
        description: 'Article description two',
        date: '4 days ago'
    },
    {
        image: '/images/news-three.jpg',
        title: 'Article title three',
        description: 'Article description three',
        date: '5 days ago'
    },
    
]

export default function News(){

    return (
        <div className="news w-full px-5 py-[80px] bg-gray-50">
            <div className="container mx-auto ">
            <h2 className="text-lg lg:text-2xl lg:text-center lg:mb-[30px]">Stay up to date with our news!</h2>
            <div className="flex flex-col items-center items-stretch lg:flex-row lg:justify-between lg:space-x-4">
                {
                    newsArticles.map((article, index) => <NewsArticleCard key={index} image={article.image} title={article.title} description={article.description} date={article.date}/>)
                }
            
            </div>
            </div>
        </div>
    )
}