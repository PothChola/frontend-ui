import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/navbar.css";
import hamburger from "../assets/hamburger.svg";

function Navbar() {
  const [isMobile, setIsMobile]= useState(false);
  return (
    <nav>
      <h2 className='logo'>LOgo</h2>
       <button className="hamburger-button" onClick={()=> setIsMobile(!isMobile)}><img src={hamburger}/></button>
            <div 
                className={isMobile ? "land-nav-mobile" : "land-nav flex justify-evenly"}
                onClick={() => setIsMobile(false)}
            >
           
          <NavLink to="/Home">Home</NavLink>
        
          <NavLink to="/About">About</NavLink>
        
          <NavLink to="/Contact">Contact</NavLink>
        </div>
    </nav>
  )
}

export default Navbar