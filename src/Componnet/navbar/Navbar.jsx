import React from 'react'
import logo from '../../assets/logo.png';
import './navbar.css'

const Navbar = () => {
  return (
    <header className="header" id="navigation-menu">
    <div className="container">
      <nav>
        <a href="#" className="logo"> <img src={logo} alt="" /> </a>

        <ul className="nav-menu">
          <li> <a href="#" className="nav-link">Home</a> </li>
          <li> <a href="#" className="nav-link">About Us</a> </li>
          <li> <a href="#" className="nav-link">What we DO</a> </li>
          <li> <a href="#" className="nav-link">Media</a> </li>
          <li> <a href="#" className="nav-link">Careers</a> </li>
          <li> <a href="#" className="nav-link">Contact</a> </li>
        </ul>

        <div className="hambuger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  </header>
  )
}

export default Navbar