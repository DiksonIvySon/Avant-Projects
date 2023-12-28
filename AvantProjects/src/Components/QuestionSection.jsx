import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './QuestionSection.css';
import tra_person from '../images/tra_person.png';
import logo from '../images/logo.jpeg';

function QuestionSection() {
    const [panel1, setPanel1] = useState("panel");
    const [panel2, setPanel2] = useState("panel");
    const [panel3, setPanel3] = useState("panel");

    const handleAccordionButton = (e) => {
        if (e.target.name === '1') {
            if (panel1 === "panel") {
                setPanel1('panel-open')
                setPanel2('panel')
                setPanel3('panel')
            }
            else {
                setPanel1('panel')
                setPanel2('panel')
                setPanel3('panel')
            }
        }
        else if (e.target.name === '2') {
            if (panel2 === "panel") {
                setPanel1('panel')
                setPanel2('panel-open')
                setPanel3('panel')
            }
            else {
                setPanel1('panel')
                setPanel2('panel')
                setPanel3('panel')
            }
        }
        else if (e.target.name === '3') {
            if (panel3 === "panel") {
                setPanel1('panel')
                setPanel2('panel')
                setPanel3('panel-open')
            }
            else {
                setPanel1('panel')
                setPanel2('panel')
                setPanel3('panel')
            }
        }
        else {
            //Do nothing
        }
    }

  return (
    <div className='questionSection'>
        <div className='section'>
            <div className='questions'>
                <div className='questions-heading sectionHeading'>
                    <h1>Frequently Asked Questions</h1>
                    <p>Avant Projects </p>
                </div>
                <div className='accordion-container'>
                    <button className="accordion" name='1' onClick={handleAccordionButton}>Section 1</button>
                    <div className={panel1}>
                        <p>Lorem ipsum...</p>
                    </div>

                    <button className="accordion" name='2' onClick={handleAccordionButton}>Section 2</button>
                    <div className={panel2}>
                        <p>Lorem ipsum...</p>
                    </div>

                    <button className="accordion" name='3' onClick={handleAccordionButton}>Section 3</button>
                    <div className={panel3}>
                        <p>Lorem ipsum...</p>
                    </div>
                </div>
                <div className='contact'>
                    <p>Have a question to ask, or need clarity?</p>
                    <Link to="/contact">
                        <button className='button1'>Contact Us</button>
                    </Link>
                </div>
            </div>
            <div className='faq-image'>
                <img src={tra_person} alt="person image" />
                <img src={logo} alt="Avant Projects logo" className='faq-logo'/>
            </div>
        </div>
    </div>
  )
}

export default QuestionSection