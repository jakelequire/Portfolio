

export default function BlogLanding() {

    return (
        <div className="blog-landing">
            <div className="blog-landing-container">


                <div className="blog-hero-container">
                    <div className="blog-landing-header">
                        <h1 className="blog-landing-hero">Blog</h1>
                    </div>
                    <div className="landing-filters">
                        <div className="filters">
                            <a className="filter-header">Recent</a>
                            <a className="filter-header">All</a>
                            <a className="filter-header">Category</a>
                            <a className="filter-header">Tags</a>
                        </div>
                    </div>
                </div>

                <div className="blog-searchbar">
                    <input className="searchbar" type="text" placeholder="Search" />
                </div>

            </div>
        </div>
    )
}