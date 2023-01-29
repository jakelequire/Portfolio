import Image from "next/image";
import useObserver  from "./hooks/useCustomSmoothScroll.jsx";
/* Thumbnails */
import featuredThumbnail from "../public/media/thumbnails/featured.webp"

export default function Blog() {
   const { ref } = useObserver();
    
   const featuredArticle = {
      thumbnail: featuredThumbnail,
      title: "Featured Article",
      date: "2021-01-01",
      description: "",
		category: "", 
		tags: []
	}

   const currentlyFeatured = {
      content:
      <div className="featured-content">
         <div className="featured-thumbnail">
            <Image 
				className="thumbnail"
				src={featuredArticle.thumbnail}
				alt={featuredArticle.title}
				/>
         </div>
			<div className="featured-text">
				<h3 className="featured-title">{featuredArticle.title}</h3>
				<p className="featured-date">{featuredArticle.date}</p>
			</div>
			<div className="featured-description-wrapper">
				<p className="featured-description">{featuredArticle.description}</p>
			</div>
			<div className="featured-tags">

			</div>
			<div className="featured-category">
				<p className="featured-category">{featuredArticle.category}</p>
			</div>
      </div>
   }


// >------------------------------------------------------------------------------------------
    return (
      <div className="blog-wrapper" id="blog" ref={ref.blog}>
         <div className="blog-container">

            <div className="blog-featured-wrapper">

               <div className="blog-featured">
                  <div className="preview-header">
                     <h2 className="preview-title">Featured Article.</h2>
                  </div>
                  <div className="blog-featured-content">
							{currentlyFeatured.content}
                  </div>
               </div>

               <div className="blog-recents">
                  <div className="preview-header">
						
                  </div>
               </div>
            </div>

            <div className="blog-preview-wrapper">
               <div className="blog-preview">
                  <div className="preview-header">
                     <h2 className="preview-title">Article Preview.</h2>
                  </div>
               </div>
            </div>
				
         </div>
      </div>
   )
}