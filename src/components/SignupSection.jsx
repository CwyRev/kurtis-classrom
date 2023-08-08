import React from 'react'
import Doodle_5 from "../assets/Miroodles Color Composition_5.png";

function SignupSection() {
  return (
    <div className='signup-section'>
        <div className='highlights'>
            <p className='highlights-1'>More than 50% of US teachers use Kurtis</p>
            <p className='highlights-2'>Players in more than 200 countries</p>
            <p className='highlights-3'>Over 30 million public games available</p>
            <p className='highlights-4'>97% of the Fortune 500 use Kurtis</p>
        </div>
        <div className='flex-container'>
            <img src={Doodle_5} className='doodle-signup' alt="doodle-5" />
            <div className='signup-text'>
              <h2 id="ready-text">Ready for make learning fun!</h2>
              <button id="signup-button-2" className="signup-button btn btn-primary">Sign up for free</button>
            </div>
        </div>
    </div>
  )
}

export default SignupSection