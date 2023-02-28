import React, { useState, useEffect } from "react";
import Image from "next/image";
import useObserver  from "./hooks/useCustomSmoothScroll.jsx";
import { SecondaryButton } from "./subComponents/components";
import Article, { articleMetadata } from './subComponents/articleMarkdown';
import { createArticle } from '../pages/api/_fetchArticles';
/* Thumbnail Images */
import featuredThumbnail from "../public/media/thumbnails/featured.webp"

export default function Blog() {
   const { ref } = useObserver();

   const [articleIndex, setArticleIndex] = useState(0);
   const [metaData, setMetaData] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const getMetaData = async () => {
         const articles = await articleMetadata(articleIndex);
         setMetaData(articles);
         setLoading(false);
      }
      getMetaData();
   }, []);

   const _featuredArticle = new createArticle({
      id: metaData.id,
      title: metaData.title,
      description: metaData.description,
      date: metaData.date,
      tags: metaData.tags,
      category: metaData.category,
      imageAlt: metaData.imageAlt,
      content: metaData.content,
   });

   const currentlyFeatured = {
      content:
      <div className="featured-content">
         <div className="featured-thumbnail">
            <Image 
				className="thumbnail"
				src={featuredThumbnail}
				alt={_featuredArticle.title}
				/>
         </div>
			<div className="featured-text">
				<h3 className="featured-title">{metaData.title}</h3>
				<p className="featured-date">{metaData.date}</p>
			</div>
			<div className="featured-description-wrapper">
				<p className="featured-description">{metaData.description}</p>
			</div>
         {/* 
			<div className="featured-tags">
            {metaData.tags.map((tag, index) => {
               return <p className="featured-tag" key={index}>{tag}</p>
            })}
			</div>
         */}
      </div>
   }


// >------------------------------------------------------------------------------------------
    return (
      <div className="blog-wrapper" id="blog" ref={ref.blog}>
               <div className="index-category-header">
        <h1 className="category-header-text">
          Blog
        </h1>
      </div>
         <div className="blog-container">

            <div className="blog-featured-wrapper">

               <div className="blog-featured">

                  <div className="blog-featured-content">
							{currentlyFeatured.content}
						<div className="featured-button-wrapper">
							<span className="f-dot f-dot-active"></span>
							<span className="f-dot"></span>
							<span className="f-dot"></span>
						</div>
                  </div>
               </div>

               <div className="blog-recents">
						<div className="blog-recents-content">
							<div className="article-buttons">
                        <SecondaryButton link="/" text="All Articles" />
                        <SecondaryButton link="/" text="View Recent" />
							</div>
						</div>
               </div>
            </div>

            <div className="blog-preview-wrapper">
               <div className="blog-preview">
						<div className="preview-content">
                     <Article className="featured-article" index={1} />
						</div>
               </div>
            </div>
				
         </div>
      </div>
   )
}