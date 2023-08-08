
import React from "react";
import Logo from "../assets/Logo1.png"

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="left-navbar">
        <img className="logo" src={Logo} alt="Logo" />
        <h1 className="title">Kurtis Classrom</h1>
      </div>
      <div className="right-navbar">
        <button id="signup-button-1" className="signup-button btn btn-primary">Sign up</button>
        <button id="login-button" className="btn btn-outline-secondary">Log in</button>
      </div>
    </nav>
  )
}

export default NavBar