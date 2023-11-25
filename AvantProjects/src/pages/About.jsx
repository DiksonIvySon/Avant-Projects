import React from 'react';
import './About.css';

import Header1 from '../Components/Header1';
import Header2 from '../Components/Header2';
import Banner from '../Components/Banner';
import PageHeading from '../Components/PageHeading';
import CallToAction from '../Components/CallToAction';
import FooterSection from '../Components/FooterSection';
import TeamMember from '../Components/TeamMember';

import hard_hat from '../images/hard_hat.png';

function About() {
  return (
    <div>
        <Header1 />
        <Header2 />
        <Banner />
        <div className='section'>
            <div className='about-page-heading'>
                <PageHeading />
            </div>
            <p className='about-page-paragraph'>
                With all of your commercial, industrial, and residential projects, you can rely on our team of 
                skilled and knowledgeable workers. You are getting knowledgeable, skilled, and creative assistance 
                when you choose Avant Projects. We can make your ideas a reality since we have the expertise and 
                inventiveness. First and foremost, we want you to be happy. Long-lasting relationships are something 
                we firmly believe in.
                <br />
                <br />
                Avant Projects was established in 1990 and now with decades of combined experience, our seasoned staff 
                is well-equipped to succeed in any assignment, with an emphasis on accuracy and diligence. Our steadfast 
                dedication is to provide excellent craftsmanship and maintaining the highest safety standards for our 
                esteemed clients and employees. Our steadfast commitment to paying close attention to detail is based on 
                our guarantee to stick to timetables and budgets. We have honed our abilities over the years, and as a 
                result, we have established a solid reputation as leaders in the field. As your dependable and 
                trustworthy building partner, we are prepared to realize your vision.
            </p>
            <div className='about-page-pillars'>
                <div className='foundational-pillars'>
                    <h2>Our Foundational Pillars</h2>
                    <ul>
                        <li>Clear and concise communication</li>
                        <li>Honest and transparent transactions</li>
                        <li>Highest level of quality and craftsmanship</li>
                        <li>Safety for both employees and customers</li>
                        <li>Strict adherence to budgetary commitments and project timelines</li>
                        <li>Utmost professionalism</li>
                    </ul>
                </div>
                <div className='hard-hat-image'>
                    <img src={hard_hat} alt="hard hat image" />
                </div>
            </div>
            <div className='about-page-team-members'>
                <div>
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                </div>
            </div>
        </div>
        <CallToAction />
        <FooterSection />
    </div>
  )
}

export default About