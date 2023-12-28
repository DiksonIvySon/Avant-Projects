import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


import Header1 from '../Components/Header1';
import Header2 from '../Components/Header2';
import Banner2 from '../Components/Banner2';
import FooterSection from '../Components/FooterSection';

import call from '../icons/call.png';
import location from '../icons/location.png';
import email from '../icons/email.png';

function Contact(props) {
    const form = useRef()
      
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0hn75wk', 'template_d3ls77c', form.current, 'CSLrYE2i9yeJKRTpW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

  return (
    <div className='contact-page'>
        <Header1 />
        <Header2 />
        <Banner2 heading="Contact"/>
        <div className='section'>
            <div className='contact-page-paragraph'>
                <p>
                    We pride ourselves in our detailed quotations, superior service and highest quality of work. 
                    By using our existing expertise and experience, we will determine the cause of failure, 
                    with the ultimate objective to provide the cause.
                </p>
            </div>
            <div className='contact-page-contacts'>
                <div className='contact-choices'>
                    <div className='choice'>
                        <div className='contact-icon'>
                            <img src={call} alt="" />
                        </div>
                        <div className='contact-info'>
                            <h3>Telephone</h3>
                            <p>+27 463 374 9272</p>
                        </div>
                    </div>
                    <div className='choice'>
                        <div className='contact-icon'>
                            <img src={email} alt="" />
                        </div>
                        <div className='contact-info'>
                            <h3>Email</h3>
                            <p>avant@global.ac.za</p>
                        </div>
                    </div>
                    <div className='choice'>
                        <div className='contact-icon'>
                            <img src={location} alt="" />
                        </div>
                        <div className='contact-info'>
                            <h3>Head Office</h3>
                            <p>35 Heidelberg Road, Elspark, Germiston</p>
                        </div>
                    </div>
                </div>
                <div className='quick-email-contact'>
                    <div className='sectionHeading heading'>
                        <h1>Get in Touch</h1>
                        <p>Please provide a brief message</p>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='form-inputs'>
                            <label>Name:
                                <br />
                                <input 
                                type="text" 
                                name='user_name'
                                placeholder='Enter your name or company name here'
                                required
                                />
                            </label>
                            <br />
                            <label>Email:
                                <br />
                                <input 
                                type="text" 
                                placeholder='Enter your email or company email here'
                                name='user_email'
                                required
                                />
                            </label>
                            <br />
                            <label>Contact Number:
                                <br />
                                <input 
                                type="text" 
                                placeholder='Enter your contact number here'
                                name='user_number'
                                required
                                />
                            </label>
                            <br />
                            <label>Subject:
                                <br />
                                <input 
                                type="text" 
                                name='user_subject'
                                placeholder='Enter the type of service you require here'
                                required
                                />
                            </label>
                        </div>
                        <br /> 
                        <div className='textarea'>
                            <label htmlFor="">Message</label>
                            <textarea name="message" cols="20" rows="10" placeholder='Please tell us more about the type of service you require here'></textarea> 
                        </div>
                        <div className='form-button'>
                            <input type="submit" className='button2'/>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        <FooterSection />
    </div>
  )
}

export default Contact