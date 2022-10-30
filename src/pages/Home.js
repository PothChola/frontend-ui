import React from 'react'
import "../styles/home.css"
export default function Home() {
  return (
    <div className='homePage'>
      <h1>Welcome!</h1>
      <div>Enter Souce-
        <input className='inputSource' type="text"/>
      </div>
      <div>
        Enter Destination-
          <input className='inputDestination' type="text"/>
      </div>
    </div>
  )
}
