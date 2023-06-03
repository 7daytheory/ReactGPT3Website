import React from 'react'
import './footer.css'

import gpt3logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt__footer section__padding">
        <div className="gpt__footer-heading">
            <h1 className="gradient__text">Do you want to step into the future before others?</h1>
        </div>

        <div className="gpt__footer-btn">
          <p>Request early access</p>
        </div>

        <div className="gpt__footer-links">
            <div className="gpt__footer-links_logo">
                <img src={gpt3logo} alt="gpt3 logo" />
                <p>Township, ON L5H 9R4, Canada</p>
            </div>

            <div className="gpt__footer-links_div">
              <h4>Links</h4>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
            </div>

            <div className="gpt__footer-links_div">
              <h4>Content</h4>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
            </div>

            <div className="gpt__footer-links_div">
              <h4>Get in Touch</h4>
              <p>Township, ON</p>
              <p>012-454-2425</p>
              <p>contact@domain.com</p>
            </div>
        </div>

        <div className="gpt__footer-copyright">
            <p>Copyright 2023 Matthew Lowe</p>
        </div>
    </div>
  )
}

export default Footer