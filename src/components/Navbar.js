import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/navbar.css";
import logo from "../assets/logo.png"
import logo2 from"../assets/logo2.svg";
import hamburger from "../assets/hamburger.svg";

function Navbar() {
  const [isMobile, setIsMobile]= useState(false);
  return (
    <nav>
      <div className='buttonlogo'>
        <img src={hamburger} alt='menuIcon' className="hamburger-button" onClick={()=> setIsMobile(!isMobile)}/>
        <img src={logo2} className="logo" alt='logo'/>
      </div>
     
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