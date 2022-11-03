import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/navbar.css";
import logo from "../assets/logo.png"
import hamburger from "../assets/hamburger.svg";

function Navbar() {
  const [isMobile, setIsMobile]= useState(false);
  return (
    <nav>
      <img src={logo} className="logo inline" alt='logo'/>
       <button className="hamburger-button" onClick={()=> setIsMobile(!isMobile)}><img src={hamburger} alt='menuIcon'/></button>
            <div 
                className={isMobile ? "land-nav-mobile" : "land-nav flex justify-evenly"}
                onClick={() => setIsMobile(false)}
            >
           
          <NavLink to="/" className="home text-yellow-300">Home</NavLink>
        
          <NavLink to="/About" className="home text-yellow-300">About</NavLink>
        
          <NavLink to="/Contact" className="home text-yellow-300">Contact</NavLink>
        </div>
    </nav>
  )
}

export default Navbar