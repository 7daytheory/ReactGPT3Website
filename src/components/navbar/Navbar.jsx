import React from 'react'
import './navbar.css';

import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className="gpt__navbar">
        <div className="gpt__navbar-links">
            <div className="gpt__navbar-links-logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="gpt__navbar-links_container">
              <p><a href="#home">Home</a></p>
              <p><a href="#gpt">What is GPT3?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Features</a></p>
              <p><a href="#library">Library</a></p>
            </div>
        </div>

        <div className="gpt__navbar-sign">
            <p>Sign In</p>
            <button type="button">Sign up</button>
        </div>
    </div>
  )
}

export default Navbar