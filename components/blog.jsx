import useObserver  from "./hooks/useCustomSmoothScroll.jsx";

export default function Blog() {
    const { ref } = useObserver();

// >------------------------------------------------------------------------------------------
    return (
        <div className="blog-wrapper" id="blog" ref={ref.blog}>
            
        </div>
    )
}