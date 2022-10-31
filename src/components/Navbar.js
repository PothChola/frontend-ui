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
           
          <NavLink to="/">Home</NavLink>
        
          <NavLink to="/About">About</NavLink>
        
          <NavLink to="/Contact">Contact</NavLink>
        </div>
    </nav>
  )
}

export default Navbar