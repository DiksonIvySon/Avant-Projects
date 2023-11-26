import React, { useState } from 'react';
import './TeamMember.css';
import tra_person from '../images/tra_person.png';




function TeamMember() {
  const [overlay, setOverlay] = useState("team-member-image-overlay-hide");

  const handleMouseOver = () => {
    setOverlay("team-member-image-overlay");
  }

  const handleMouseLeave = () => {
    setOverlay("team-member-image-overlay-hide");
  }

  return (
    <div className='team-member'>
        <div className="card">
            <div className='team-member-image'>
                <img src={tra_person} alt="Team member image" />
                <div className={overlay} onMouseMove={handleMouseOver} onMouseLeave={handleMouseLeave}>
                  <div className='team-member-overlay-text'>
                    <p>
                      15 years <br />of construction <br />industry experience
                    </p>
                  </div>
                </div>
            </div>
            <div className="container">
                <h2>Andre Van Tonder</h2>
                <p className="title">CEO &amp; Founder</p>
                <p>Some text that describes me.</p>
            </div>
        </div>
    </div>
  )
}

export default TeamMember