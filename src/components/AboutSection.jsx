import React from 'react'
import icon_1 from "../assets/icon_1.png"
import icon_2 from "../assets/icon_2.png"
import icon_3 from "../assets/icon_3.png"
import icon_4 from "../assets/icon_4.png"

function AboutSection() {
  return (
    <div className="about-section">
        <h3>Who is Kurtis for?</h3>
        <div className='line-div'></div>
        <div className='about-container'>
            <div>
                <img src={icon_1} alt="icon-1" />
                <h4>At School</h4>
                <p className='description'>Engaging group and distance learning for teachers and students.</p>
                <span className='learn-more'>Learn More</span>
            </div>
            <div>
                <img src={icon_2} alt="icon-1" />
                <h4>At work</h4>
                <p className='description'>For training, e-learning, interactive presentations and more.</p>
                <span className='learn-more'>Learn More</span>
            </div>
            <div>
                <img src={icon_3} alt="icon-1" />
                <h4>At home</h4>
                <p className='description'>Apps and games for family fun or home study.</p>
                <span className='learn-more'>Learn More</span>
            </div>
            <div>
                <img src={icon_4} alt="icon-1" />
                <h4>At Learning apps</h4>
                <p className='description'>Engage kids with the Kahoot! family of learning apps</p>
                <span className='learn-more'>Learn More</span>
            </div>
        </div>
        <div className='button-container'>
            <button id="about-signup" className='signup-button btn btn-primary'>SIGN UP NOW</button>
        </div>
    </div>
  )
}

export default AboutSection