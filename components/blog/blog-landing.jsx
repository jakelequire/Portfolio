import { useState, useEffect, useRef, useCallback } from 'react'
import useCustomHover from '../hooks/useCustomHover.jsx'
import useCustomFilter from '../hooks/useCustomFilter.jsx'
import useLottieAnimation from '../hooks/useLottieAnimation.jsx'

export default function BlogLanding() {

    const [tagHover, tagRef] = useCustomHover()
    const [categoryHover, categoryRef] = useCustomHover()

    const { filter, setFilter, setCategory, setTag } = useCustomFilter();

    /* Dropdown animation  */
    const animationRefCategory = useRef(null);
    const animationRefTag = useRef(null);

    useLottieAnimation(animationRefCategory, categoryHover);
    useLottieAnimation(animationRefTag, tagHover);
    
// >------------------------------------------------------------------------------------------
    return (
        <div className="blog-landing">
            <div className="blog-landing-container">

                <div className="blog-hero-container">
                    <div className="blog-landing-header">
                        <h1 className="blog-landing-hero">Blog</h1>
                    </div>
                    <div className="landing-filters">
                        <div className="filters">
                            <a className="filter-header"
                            onClick={() => setFilter("recent")}
                            id={filter === "recent" ? "filter-active" : "filter-inactive"}>
                            Recent</a>
                            <a className="filter-header"
                            onClick={() => setFilter("all")}
                            id={filter === "all" ? "filter-active" : "filter-inactive"}>
                            All</a>
                            
                            <div ref={categoryRef} className="filter-dropdown-category">
                            <a className="filter-header" ref={animationRefCategory}
                            id={categoryHover ? 'filters-active' : 'filters-inactive'}>Category</a>     
                                {categoryHover ? (
                                    <div  className='A-filter-dropdown-category'
                                    id={categoryHover ? 'category-active' : 'category-inactive'}>
                                      <a className="filter-dropdown-item"
                                      onClick={() => setCategory(prev => !prev)}>Category 1</a>
                                      <a className="filter-dropdown-item"
                                      onClick={() => setCategory(prev => !prev)} >Category 2</a>
                                      <a className="filter-dropdown-item"
                                      onClick={() => setCategory(prev => !prev)}>Category 3</a>
                                    </div>
                                ): null}
                            </div> {/* Note to self: add a button that will reset the filters */}

                            <div ref={tagRef} className="filter-dropdown-tags">
                                <a className="filter-header" ref={animationRefTag}
                                id={tagHover ? 'filters-active' : 'filters-inactive'}>Tags</a>
                                {tagHover ? (
                                    <div className='A-filter-dropdown-tags'
                                    id={tagHover ? 'tags-active' : 'tags-inactive'}>
                                      <a id="tag1" className="filter-dropdown-item"
                                      onClick={() => setTag(prev => !prev)}># Tag 1</a>
                                      <a id="tag2" className="filter-dropdown-item"
                                      onClick={() => setTag(prev => !prev)}># Tag 2</a>
                                      <a id="tag3" className="filter-dropdown-item"
                                      onClick={() => setTag(prev => !prev)}># Tag 3</a>
                                    </div>
                                ): null}
                            </div> 

                        </div>
                    </div>
                </div>

                <div className="blog-searchbar">
                        <input
                        className="searchbar"
                        type="text"
                        placeholder="Search"
                        // value={searchTerm}
                        // onSubmit={(event) => setSearchTerm(event.target.value)}
                        />
                </div>

            </div>
        </div>
    )
}