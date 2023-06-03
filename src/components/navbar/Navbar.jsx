import React , { useState } from 'react'
import './navbar.css';

import logo from '../../assets/logo.svg';
import {RiCloseLine, RiMenu3Line} from "react-icons/ri";

const Menu = () => {
  return (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#gpt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Features</a></p>
    <p><a href="#library">Library</a></p>
  </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt__navbar">
        <div className="gpt__navbar-links">
            <div className="gpt__navbar-links-logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="gpt__navbar-links_container">
              <Menu />
            </div>
        </div>

        <div className="gpt__navbar-sign">
            <p>Sign In</p>
            <button type="button">Sign up</button>
        </div>

        <div className="gpt__navbar-menu">
            {toggleMenu ? <RiCloseLine color="#FFF" size={27} onClick={() => setToggleMenu(false)} /> :
            <RiMenu3Line color="#FFF" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
              <div className="gpt__navbar-menu_container scale-up-center">
                  <div className="gpt__navbar-menu_container-links">
                      <Menu />
                      <div className="gpt__navbar-menu_container-links-sign">
                        <p>Sign In</p>
                        <button type="button">Sign up</button>
                      </div>
                      </div>
                  </div>
            )}
        </div>
    </div>
  )
}

export default Navbar