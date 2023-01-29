import useObserver  from "./hooks/useCustomSmoothScroll.jsx";

export default function Blog() {
    const { ref } = useObserver();
    
// >------------------------------------------------------------------------------------------
    return (
        <div className="blog-wrapper" id="blog" ref={ref.blog}>
            <div className="blog-container">

                <div className="blog-featured-wrapper">
                    
                    <div className="blog-featured">
                        <div className="featured-header">
                            <h2 className="blog-featured-title">Featured Article.</h2>
                        </div>
                        <div className="blog-featured-content">

                        </div>
                    </div>

                    <div className="blog-recents">
                        <div className="recents-header">
                            <h2 className="blog-preview-title">Recent Articles.</h2>
                        </div>

                    </div>

                </div>

                <div className="blog-preview-wrapper">
                    <div className="blog-preview">
                        <div className="preview-header">
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}