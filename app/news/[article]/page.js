
import Footer from "@/app/SiteComponents/Footer";
import GetInvolvedBanner from "@/app/SiteComponents/GetInvolvedBanner";
import Navbar from "@/app/SiteComponents/Navbar";
import { fetchPostBySlug } from "@/sanity/utils";
import Image from "next/image";
import { PortableText } from '@portabletext/react';


export default async function Article(props) {
  const { article } = props.params;
  const post = await fetchPostBySlug(article)

  
  return (
    <div>
      <Navbar />
      <div className="mt-[80px]">
        <div className="article-content container mx-auto text-center my-[80px] mt-[160px] px-4 lg:px-0">
          <h2 className="mb-2">{post.postTitle}</h2>
          <p className="text-lg">{post.date}</p>
          <div className="article-banner h-[350px] relative mt-[40px] max-w-[800px] mx-auto">
            <Image 
              src={post.postImage}
              alt=''
              layout='fill' 
              objectFit="cover" 
              objectPosition="center" 
            />
          </div>
         <div className='mt-12 max-w-[800px] mx-auto text-left'>
            <PortableText value={post.content}/> 
          </div>
          <div className="mt-[40px] max-w-[800px] mx-auto text-left">
            {/* {post.content.map((block, index) => (
              <p key={index}>{block.children[0].text}</p>
            ))} */}
          </div>
        </div>
      </div>
      <GetInvolvedBanner />
      <Footer />
    </div>
  );
}
