import { useRef } from 'react';
import useObserver  from "./hooks/useCustomSmoothScroll.jsx";

export default function Blog() {
    const {visible, index, setIndex, ref } = useObserver();

// >------------------------------------------------------------------------------------------
    return (
        <div className="blog-wrapper" id="blog" ref={ref.blog}>
            <div className="blog-header">
                <div className="blog-header-title">
                    <h1 className="blog-title"><span id="blog-B">B</span>log</h1>
                </div>
                <div className="blog-path">
                    <a className="blog-path-link" href="/blog">View More &#187;</a>
                </div>
            </div>
            
            <div className="blog-content">
                <div className="blog-items-wrapper">
                    <div className="blog-post">
                        <div className="blog-post-thumbnail">

                        </div>
                        <div className="blog-post-header">
                            <h2 className="blog-post-title">Lorem ipsum dolor sit amet</h2>
                            <p className="blog-post-caption"> 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
                            </p>
                            <p className="blog-post-date">12/12/2020</p>
                        </div>
                        <div className="blog-post-tags">
                            <span id="b-React" className="blog-post-tag">#React</span>
                            <span id="b-JavaScript" className="blog-post-tag">#JavaScript</span>
                            <span id="b-CSS" className="blog-post-tag">#CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}