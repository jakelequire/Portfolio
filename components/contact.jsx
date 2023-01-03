import { useEffect, useState, useRef } from 'react';
import useCustomSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";

export default function Contact() {
    const { refs } = useCustomSmoothScroll();
    return (
        <div className="contact-wrapper" id="contact" ref={refs[4]}>
            <div className="contact-header">
                <h1 className="contact-title"><span id="contact-C">C</span>ontact Me!</h1>
            </div>
            <div className="contact">
                <form className="contact-form" action="/contact" method="POST">
                    <div className="form-top">
                        <div className="form-name">
                            <label id="f-name" htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="form-email">
                            <label id="f-email" htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div className="form-body">
                        <div className="form-subject">
                            <label id="f-subject" htmlFor="subject">Subject</label>
                            <input type="text" name="subject" id="subject" />
                        </div>
                        <div className="form-message">
                            <label id="f-message" htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="form-button">
                        <button href={null} className="f-btn" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}