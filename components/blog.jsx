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
      <div className="blog-featured-content">
         <div className="blog-featured-thumbnail">
            <Image src={featuredArticle.thumbnail} alt={featuredArticle.title} />
         </div>
			<div className="blog-featured-text">
				<h3 className="blog-featured-title">{featuredArticle.title}</h3>
				<p className="blog-featured-date">{featuredArticle.date}</p>
				<p className="blog-featured-description">{featuredArticle.description}</p>
			</div>
			<div className="blog-featured-tags">

			</div>
			<div className="blog-featured-category">
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