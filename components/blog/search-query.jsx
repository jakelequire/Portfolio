
export default function SearchQuery() {



    return(
        <div className="search-query-container">
            <div className="search-query">

                <div className="search-query-header">
                    <h1 className="search-query-title">Search Results</h1>
                </div>
                <div className="search-query-results">
                    
                    <div className="query-mode-recent">
                        <div className="query-example">
                            <div className="query-example-image">Placeholder</div>
                            <h1 className="query-example-title">Title</h1>
                            <p className="query-example-description">Description</p>
                            <div className="query-example-category">
                                <a className="query-example-category">Category</a>
                            </div>
                            <div className="query-example-tags">
                                <a className="query-example-tag">#Tag1</a>
                                <a className="query-example-tag">#Tag2</a>
                                <a className="query-example-tag">#Tag3</a>
                            </div>

                        </div>
                    </div> 

                    <div className="query-mode-all">

                    </div>
                </div>
            </div>
        </div>
    )
}