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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
		tags: ["tag1", "tag2", "tag3"],
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
				{featuredArticle.tags.map((tag, index) => {
					return <p className="featured-tag" key={index}>#{tag}</p>
				})}
			</div>
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
                  <div className="preview-header">
                     <h2 className="preview-title">Featured Article.</h2>
                  </div>
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
								<a className="recent-button" href="/">All Articles</a>
								<a className="recent-button" href="/">View Recent</a>
							</div>
						</div>
               </div>
            </div>

            <div className="blog-preview-wrapper">
               <div className="blog-preview">
                  <div className="preview-header">
                     <h2 className="preview-title">Article Preview.</h2>
                  </div>
						<div className="preview-content">

						</div>
               </div>
            </div>
				
         </div>
      </div>
   )
}