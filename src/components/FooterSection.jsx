import React from 'react'
import BrandWhite from "../assets/Brand_White.png";
import Logo_2 from "../assets/Logo2.png";
import Appstore from "../assets/download-1.png";
import Playstore from "../assets/download-2.png";
import Appgallery from "../assets/download-3.png";
import Socials_1 from "../assets/socials_1.png";
import Socials_2 from "../assets/socials_2.png";
import Socials_3 from "../assets/socials_3.png";
import Socials_4 from "../assets/socials_4.png";
import Socials_5 from "../assets/socials_5.png";


function FooterSection() {
  return (
    <div className='footer-section'>
        <div className='footer-flex-container'>
            <div className='footer-column-1'>
                <img src={Logo_2} id="footer-logo" alt="logo-white" />
                <img src={BrandWhite} id="footer-brand-name" alt="brand-white" />
                <span id='get-app'>Get the app:</span>
                <div className='app-links-container'>
                    <img src={Appstore} alt="Appstore-link" />
                    <img src={Playstore} alt="Playstore-link" />
                    <img src={Appgallery} alt="Appgallery-link" />
                </div>
                <span id="follow">Follow us:</span>
                    <div className='follow-us-container'>
                        <img src={Socials_1} alt="socials-1" />
                        <img src={Socials_2} alt="socials-2" />
                        <img src={Socials_3} alt="socials-3" />
                        <img src={Socials_4} alt="socials-4" />
                        <img src={Socials_5} alt="socials-5" />
                    </div>
            </div>
            <div className='footer-column-2'>
                <h5>About</h5>
                <ul>
                    <li>Company</li>
                    <li>Leadership</li>
                    <li>Jobs - HIRING!</li>
                    <li>Pricing</li>
                    <li>Press</li>
                    <li>Investors</li>
                </ul>
            </div>
            <div className='footer-column-3'>
                <h5>Solutions</h5>
                <ul>
                    <li>At School</li>
                    <li>At Work</li>
                    <li>At Home</li>
                </ul>
            </div>
            <div className='footer-column-4'>
                <h5>Resources</h5>
                <ul>
                    <li>Study with Kurtis</li>
                    <li>Blog</li>
                    <li>Kurtis Certified</li>
                    <li>Help Center</li>
                    <li>Library</li>
                    <li>Shop</li>
                    <li>Safety center</li>
                </ul>
            </div>
            <div className='footer-column-5'>
                <h5>Terms and conditions</h5>
                <ul>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>US Privacy Laws</li>
                    <li>Children's Privary Policy</li>
                    <li>Inclusion and Accessibility policy</li>
                </ul>
            </div>
        </div>
        <div className='copyright-div'>
            <p id="copyright">Copyright @ 2020, Kurtis All rights reserved.</p>
        </div>
    </div>
  )
}

export default FooterSection