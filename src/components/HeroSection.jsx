import React from 'react'
import Appstore from "../assets/download-1.png"
import Playstore from "../assets/download-2.png"
import MyDoodle from "../assets/Miroodles Color Composition_1.png"

function HeroSection() {
  return (
    <div className="hero-section">
        <div className="left-hero">
            <div className='header'>
                <h2>Make Learning Fun!</h2>
                <p className="subject">Any subject, in any language, on any<br />device, for all ages!</p>
                <button className="free btn btn-primary">Sign up for free</button>
            </div>
            <div className="lower-left">
                <p className="download">Or download the app:</p>
                <img className="appstore" src={Appstore} alt="Appstore-link" />
                <img className="android" src={Playstore} alt="Playstore-link" />
            </div>
        </div>
        <div className="right-hero">
          <img src={MyDoodle} className="doodle-1" alt="doodle-1" />
        </div>
    </div>
  )
}

export default HeroSection