import React from "react";
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
  let url = "#";
  return (
    <div className="footer-section">
      <div className="footer-flex-container">
        <div className="footer-column-1">
          <a href={url}>
            <img src={Logo_2} id="footer-logo" alt="logo-white" />
            <img src={BrandWhite} id="footer-brand-name" alt="brand-white" />
          </a>
          <span id="get-app">Get the app:</span>
          <div className="app-links-container">
            <a href={url}>
              <img src={Appstore} alt="Appstore-link" />
            </a>
            <a href={url}>
              <img src={Playstore} alt="Playstore-link" />
            </a>
            <a href={url}>
              <img src={Appgallery} alt="Appgallery-link" />
            </a>
          </div>
          <span id="follow">Follow us:</span>
          <div className="follow-us-container">
            <a href={url}>
              <img src={Socials_1} alt="socials-1" />
            </a>
            <a href={url}>
              <img src={Socials_2} alt="socials-2" />
            </a>
            <a href={url}>
              <img src={Socials_3} alt="socials-3" />
            </a>
            <a href={url}>
              <img src={Socials_4} alt="socials-4" />
            </a>
            <a href={url}>
              <img src={Socials_5} alt="socials-5" />
            </a>
          </div>
        </div>
        <div className="footer-column-2">
          <h5>About</h5>
          <ul>
            <a href={url}>
              <li>Company</li>
            </a>
            <a href={url}>
              <li>Leadership</li>
            </a>
            <a href={url}>
              <li>Jobs - HIRING!</li>
            </a>
            <a href={url}>
              <li>Pricing</li>
            </a>
            <a href={url}>
              <li>Press</li>
            </a>
            <a href={url}>
              <li>Investors</li>
            </a>
          </ul>
        </div>
        <div className="footer-column-3">
          <h5>Solutions</h5>
          <ul>
            <a href={url}>
              <li>At School</li>
            </a>
            <a href={url}>
              <li>At Work</li>
            </a>
            <a href={url}>
              <li>At Home</li>
            </a>
          </ul>
        </div>
        <div className="footer-column-4">
          <h5>Resources</h5>
          <ul>
            <a href={url}>
              <li>Study with Kurtis</li>
            </a>
            <a href={url}>
              <li>Blog</li>
            </a>
            <a href={url}>
              <li>Kurtis Certified</li>
            </a>
            <a href={url}>
              <li>Help Center</li>
            </a>
            <a href={url}>
              <li>Library</li>
            </a>
            <a href={url}>
              <li>Shop</li>
            </a>
            <a href={url}>
              <li>Safety center</li>
            </a>
          </ul>
        </div>
        <div className="footer-column-5">
          <h5>Terms and conditions</h5>
          <ul>
            <a href={url}>
              <li>Terms and Conditions</li>
            </a>
            <a href={url}>
              <li>Privacy Policy</li>
            </a>
            <a href={url}>
              <li>US Privacy Laws</li>
            </a>
            <a href={url}>
              <li>Children's Privary Policy</li>
            </a>
            <a href={url}>
              <li>Inclusion and Accessibility policy</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="copyright-div">
        <p id="copyright">Copyright @ 2020, Kurtis All rights reserved.</p>
      </div>
    </div>
  );
}

export default FooterSection;
