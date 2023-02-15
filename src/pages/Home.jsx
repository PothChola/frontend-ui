import React from 'react'
import "../styles/home.css"
import buses from "../assets/buses.svg";
import preference from "../assets/preference.svg";
import bus from "../assets/Frontend/bus.svg";
import metro from "../assets/Frontend/metro.svg";
import auto from "../assets/Frontend/auto.svg";
import train from "../assets/Frontend/train.svg";

export default function Home() {
  return (
    <div className='homePage'>
      <h1 className="welcome font-bold italic pb-5 text-blue-600">Welcome!</h1>
      <div className='source pb-3 text-[16px]'>Enter Souce -
        <input className='inputSource pl-2 bg-gray-300 rounded-full h-8' type="text"/>
      </div>
      <div className='destination text-[16px] '>
        Enter Destination -
          <input className='inputDestination pl-2 bg-gray-300 h-8 rounded-full' type="text"/>
      </div>
      <button className='searchButton w-32' >Search</button>
      <h4>Choose your means of Travel- </h4>
      <div className='preference'>
        <img src={bus}/>
        <img src={auto} />
        <img src={metro}/>
        <img src={train} />
      </div>
      <h3 className='or'>OR</h3>
      <div className='buttonsize'>
      <button className='oroption'>Cheapest and shortest route.</button>
        </div>
      <h4>Available buses in this route-</h4>
      <img src={buses} alt="buses avialabe"/>
    </div>
  )
}
