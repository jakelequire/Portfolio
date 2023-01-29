import useObserver  from "./hooks/useCustomSmoothScroll.jsx";

export default function Blog() {
    const { ref } = useObserver();
    
// >------------------------------------------------------------------------------------------
    return (
        <div className="blog-wrapper" id="blog" ref={ref.blog}>
            <div className="blog-container">
                <div className="blog-featured-wrapper">
                    <div className="blog-featured">
                        <h1 className="blog-featured-title">Featured Article.</h1>
                        <div className="blog-featured-content">

                        </div>
                    </div>
                    <div className="blog-recents">


                    </div>
                </div>
                <div className="blog-preview-wrapper">
                    <div className="blog-preview">


                    </div>
                </div>
            </div>
        </div>
    )
}