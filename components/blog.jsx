import useObserver  from "./hooks/useCustomSmoothScroll.jsx";

export default function Blog() {
    const { ref } = useObserver();
    
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
                            <h2 className="preview-title">Recent Articles.</h2>
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