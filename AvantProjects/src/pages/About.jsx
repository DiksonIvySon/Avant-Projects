import React from 'react';
import './About.css';

import Header1 from '../Components/Header1';
import Header2 from '../Components/Header2';
import Banner2 from '../Components/Banner2';
import CallToAction from '../Components/CallToAction';
import FooterSection from '../Components/FooterSection';
import TeamMember from '../Components/TeamMember';

import hard_hat from '../images/hard_hat.png';
import working from '../images/working.jpeg';

function About(props) {
  return (
    <div>
        <Header1 />
        <Header2 />
        <Banner2 heading="About" pageTitleProp="About"/> 
        <div className='section'>
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
            <div className='about-page-questions'>
                <div className='about-question'>
                    <h1><span>WHO</span> ARE <br /> WE?</h1>
                    <p>
                        Avant Projects is a Gauteng based construction company. Run by Cecilia and Andre Van Tonder.
                        <br />
                        Cecilia and Andre Van Tonder founded Avant Projects in 1990 with passion in the construction industry.
                        Since then, Avant Projects has collaborated on numerous initiatives with numerous significant businesses, 
                        including TATA and Tiger Brands.
                    </p>
                </div>
                <div className='about-question'>
                    <h1><span>WHAT</span> WE <br /> GUARANTEE?</h1>
                    <p>
                        From the beginning to the conclusion, we want every project to be properly handled and carried out. to keep you 
                        up to date, assured, and content at every stage of the undertaking.
                        <br />
                        By keeping everyone engaged producing work of the highest caliber, we want to achieve this. For every procedure, 
                        we create and manage reasonable budgets. We collaborate with a network of reliable, inspired vendors and experts 
                        that we can rely on. Honest counsel, transparent communication, and prudent project management are things we take 
                        great delight in.
                    </p>
                </div>
                <div className='about-question'>
                    <h1><span>WHY</span> DO <br /> WE DO THIS?</h1>
                    <p>
                        text here text here text here text here text here text here text here text here text here text here text here 
                        text here text here text here text here text here text here
                        <br />
                        text here text here text here text here text here text here text here text here text here text here text here 
                        text here text here text here text here text here text here text here text here text here text here text here 
                        text here text here text here text here text here text here
                    </p>
                </div>
            </div>
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
            <div className='sectionHeading heading'>
                <h1>Meet The Team</h1>
                <p>Avant Projects </p>
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
        <div className='section'>
            <div className='about-page-choose'>
                <div className='about-page-info'>
                    <h2>Choose Avant Projects For:</h2>
                    <div>
                        <p>
                            <b>High-quality Workmanship:</b> <br /> The members of our 
                            team are proficient experts committed to providing 
                            each project with work of an outstanding quality.
                        </p>
                        <p>
                            <b>Timely Completion:</b> <br /> We recognize the value of 
                            completing tasks by the deadline. To guarantee that 
                            your job is finished on schedule, we work promptly.
                        </p>
                        <p>
                            <b>Attention to Detail:</b> <br /> We take great care to 
                            notice even the smallest details, so that your job 
                            is completed perfectly.
                        </p>
                        <p>
                            <b>Customer Satisfaction:</b> <br /> Our priority is your 
                            satisfaction. We work closely with our clients, 
                            keeping them informed throughout the construction process.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <FooterSection />
    </div>
  )
}

export default About