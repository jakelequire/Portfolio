import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/media/logo.png'

export default function BlogSidebar() {

    return (
        <div className="blog-sidebar-wrapper">
            <div className="blog-sidebar">
                <div className="blog-sidebar-title">
                    <a className="blog-logo-image"href="/">
                        <Image className="blog-logo-image"src={logo} alt="Blog Sidebar Title" />
                    </a>
                    <a href="/" className="blog-sidebar-title-text">&#11164; Return Home</a>
                </div>

                <div className="sidebar-content-wrapper">
                    <div className="sidebar-recent-posts">
                        <div className="recent-posts-title">
                            <h1 className="sidebar-title" >Recent Posts</h1>
                        </div>
                    </div>

                    <div className="sidebar-categories">
                        <div className="categories-title">
                            <h1 className="sidebar-title">Categories</h1>
                        </div>
                    </div>

                    <div className="sidebar-tags">
                        <div className="tags-title">
                            <h1 className="sidebar-title">Tags</h1>
                        </div>    
                    </div>
                </div>

            </div>
        </div>
    )
}

