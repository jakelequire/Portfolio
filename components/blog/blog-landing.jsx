import { useState, useEffect, useRef } from 'react'
import useCustomHover from '../hooks/useCustomHover.jsx'

export default function BlogLanding() {

    const [tagHover, tagRef] = useCustomHover()
    const [categoryHover, categoryRef] = useCustomHover()


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
                            <a className="filter-header">Recent</a>
                            <a className="filter-header">All</a>
                            
                            <div ref={categoryRef} className="filter-dropdown-category">
                            <a className="filter-header">Category</a>     
                                {categoryHover ? (
                                    <div className='filter-dropdown-category'
                                    id={categoryHover ? 'category-active' : 'category-inactive'}>
                                      <a className="filter-dropdown-item">Category 1</a>
                                      <a className="filter-dropdown-item">Category 2</a>
                                      <a className="filter-dropdown-item">Category 3</a>
                                    </div>
                                ): null}
                            </div>

                            <div ref={tagRef} className="filter-dropdown-tags">
                                <a className="filter-header">Tags</a>
                                {tagHover ? (
                                    <div className='filter-dropdown-tags'
                                    id={tagHover ? 'tags-active' : 'tags-inactive'}>
                                      <a className="filter-dropdown-item">Tag 1</a>
                                      <a className="filter-dropdown-item">Tag 2</a>
                                      <a className="filter-dropdown-item">Tag 3</a>
                                    </div>
                                ): null}
                            </div> 

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