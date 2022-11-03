import React from 'react'
import "../styles/home.css"
export default function Home() {
  return (
    <div className='homePage'>
      <h1 className="font-bold italic pb-5 text-blue-600">Welcome!</h1>
      <div className='source pb-3'>Enter Souce-
        <input className='inputSource pl-2 bg-gray-300 rounded-md' type="text"/>
      </div>
      <div>
        Enter Destination-
          <input className='inputDestination pl-2 bg-gray-300 rounded-md' type="text"/>
      </div>
    </div>
  )
}
