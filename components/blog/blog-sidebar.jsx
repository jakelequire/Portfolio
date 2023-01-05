import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/media/logo.png'

export default function BlogSidebar() {

    return (
        <div className="blog-sidebar-wrapper">
            <div className="blog-sidebar">
                <div className="blog-sidebar-title">
                    <Image className="blog-logo-image"src={logo} alt="Blog Sidebar Title" />
                    <a href="/" className="blog-sidebar-title-text">&#11164;Return Home</a>
                </div>
            </div>
        </div>
    )
}

/* 
what is the HTML code for "<"?
a: &lt;
*/