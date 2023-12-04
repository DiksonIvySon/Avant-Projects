import React from 'react'
import './TestimonialsSection.css'

//logo imports
import abe from '../Projects_company_logos/abe.png';
import palram from '../Projects_company_logos/palram.png';
import PPC from '../Projects_company_logos/PPC.png';
import prominent_paints from '../Projects_company_logos/prominent_paints.png';
import pronto from '../Projects_company_logos/pronto.png';
import Safintra from '../Projects_company_logos/Safintra.png';
import SCPD from '../Projects_company_logos/SCPD.png';
import TOP_paints from '../Projects_company_logos/TOP_paint.png';
import handshake from '../images/handshake.webp';
import hardhat from '../images/hard_hat.png';

function TestimonialsSection() {
  return (
    <div className='testimonial-section'> 
      <div className='section'>
      <div className='testimonials-heading sectionHeading'>
            <h1>Testimonials</h1>
            <p>Avant Projects </p>
        </div>
        <div className='testimonials-grid'>
            <div className='testimonials-grid-images'>
                <div className='testimonial-section-grid-image'>
                    <img src={handshake} className='testimonial-handshake' alt="hand shake image" />
                    <img src={hardhat} className='testimonial-hardhat' alt="hard hat image" />
                </div>
            </div>
            <div className='testimonials-container'>
                <div className='testimonial'>
                    <div className='testimonial-header'>
                        <div className='company-logo'>
                            <img src={abe} alt="Company Logo" />
                        </div>
                        <div className='testimonial-writer'>
                            <h4>Bruce R Smith</h4>
                            <p>Director</p>
                            <p>Project Management</p>
                        </div>
                    </div>
                    <hr />
                    <p className='testimonial-paragraph'>
                            <span>"</span>Having worked for and with Avant projects in various roles since 1990 , I have been very satisfied with their focus 
                            and drive applicable to the support and cooperation I had in all my roles in the company. They deal with any issues 
                            that need additional attention and keep their customers up to date with progress. I recommend their reliability... <span>"</span>
                    </p>
                    <a href="">
                        <button className='button1'>Open Original Testimonial</button>
                    </a>
                </div>
                <div className='testimonial'>
                    <div className='testimonial-header'>
                        <div className='company-logo'>
                            <img src={abe} alt="Company Logo" />
                        </div>
                        <div className='testimonial-writer'>
                            <h4>Eric Gouws (Pty) Ltd</h4>
                            <p>abe</p>
                            <p>Construction Chemicals</p>
                        </div>
                    </div>
                    <hr />
                    <p className='testimonial-paragraph'>
                            <span>"</span>This is to confirm that Avant has been in the construction industry for 24+ years and have been members of the GMBA 
                            for more than 20 years. abe Construction Chemicals (Pty) Limited has no hesitation in recommending them and granting them APPROVED 
                            APPLICATOR / CONTRACTOR STATUS... <span>"</span>
                    </p>
                    <a href="">
                        <button className='button1'>Open Original Testimonial</button>
                    </a>
                </div>
                <div className='testimonial'>
                    <div className='testimonial-header'>
                        <div className='company-logo'>
                            <img src={pronto} alt="Company Logo" />
                        </div>
                        <div className='testimonial-writer'>
                            <h4>MARISCA HABIB</h4>
                            <p>Sales / Admin</p>
                            <p>Manager</p>
                        </div>
                    </div>
                    <hr />
                    <p className='testimonial-paragraph'>
                            <span>"</span>Avant Projects has been a customer of Pronto Ready Mix since 2002 and we have maintained a good business relationship 
                            during this time. We find their employees knowledgeable in all aspects of the projects being carried out. If needed, they have full 
                            access to our resident Engineer, Johan Ras for any assistance required... <span>"</span>
                    </p>
                    <a href="">
                        <button className='button1'>Open Original Testimonial</button>
                    </a>
                </div>
            </div>
        </div>
        <div className='companies-slide'>
            <h2>Companies that approve our work and material</h2>
            <hr />
            <div className='logos'>
                <div className='logo'>
                    <img src={PPC} alt="company logo image" />
                </div>
                <div className='logo'>
                    <img src={palram} alt="company logo image" />
                </div>
                <div className='logo'>
                    <img src={TOP_paints} alt="company logo image" />
                </div>
                <div className='logo'>
                    <img src={prominent_paints} alt="company logo image" />
                </div>
                <div className='logo'>
                    <img src={SCPD} alt="company logo image" />
                </div>
                <div className='logo'>
                    <img src={Safintra} alt="company logo image" />
                </div>
                <div className='logo'>
                    <img src={abe} alt="company logo image" />
                </div>
                <div className='logo'>
                    <img src={PPC} alt="company logo image" />
                </div>
                <div className='logo'>
                    <img src={PPC} alt="company logo image" />
                </div>
            </div>
            <hr />
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection