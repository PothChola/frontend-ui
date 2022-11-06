import React from 'react'
import "../styles/home.css"
import buses from "../assets/buses.svg";
export default function Home() {
  return (
    <div className='homePage'>
      <h1 className="font-bold italic pb-5 text-blue-600">Welcome!</h1>
      <div className='source pb-3 text-[16px]'>Enter Souce -
        <input className='inputSource pl-2 bg-gray-300 rounded-full h-8' type="text"/>
      </div>
      <div className='destination text-[16px] '>
        Enter Destination -
          <input className='inputDestination pl-2 bg-gray-300 h-8 rounded-full' type="text"/>
      </div>
      <button className='searchButton w-32'>Search</button>
      <h4>Available buses in this route-</h4>
      <img src={buses} alt="buses avialabe"/>
    </div>
  )
}
