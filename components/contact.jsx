import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import useCustomSmoothScroll  from "./hooks/useCustomSmoothScroll.jsx";

import Resume from '../public/media/Resume.png';




export default function Contact() {
    const { refs } = useCustomSmoothScroll();

    const resumeBtn = useRef(null);
    const resumeImg = useRef(null);
  // mental note: make this a custom hook to reference the same event listeners
    useEffect(() => {
        resumeBtn.current.addEventListener('mouseover', function() {
            resumeImg.current.setAttribute('id', 'mouseover-active');
        });
        resumeBtn.current.addEventListener('mouseout', function() {
            resumeImg.current.removeAttribute('id');
        });
    }, []);
    /* ----------------------------------- */
    const formRef = useRef(null);

    useEffect(() => {
        // add event listener to the form element
        formRef.current.addEventListener('submit', async (event) => {
          event.preventDefault();
          // get form data
          const formData = new FormData(formRef.current);
          const data = Object.fromEntries(formData);
          // send data to backend
          try {
            const response = await fetch('https://fa007e00-62a2-4140-8396-50712bfcdfa2.mock.pstmn.io/api/server', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
            const result = await response.json();
            console.log(result);
          } catch (error) {
            console.error(error);
          }
        });
      }, []);
      
// >------------------------------------------------------------------------------------------
    return (
        <div className="contact-wrapper" id="contact" ref={refs[4]}>
            <div className="contact-header">
                <h1 className="contact-title"><span id="contact-C">C</span>ontact Me!</h1>
            </div>
            <div className="contact-info">
                <div className="contact">
                    <form ref={formRef} className="contact-form" action="/contact" method="POST">
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
                <div className="resume-container">
                    <h1 className="resume-title">Resume</h1>
                    <div className="resume" id="resume">
                        <button ref={resumeBtn} className="resume-btn">View File</button>
                        <Image ref={resumeImg} className="resume-img" id src={Resume} alt="resume" width={575} height={650}/>
                    </div>
                </div>
            </div>
        </div>
    )
}