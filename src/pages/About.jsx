import React from 'react'
import "../styles/about.css"
function About() {
  return (
    <div>
      <h1 className='about-text1 font-extrabold pl-1 text-blue-500 italic pb-5'>Why Choose us?</h1>
      <h2 className='about-text2 pl-1'>We Are Professional, Convenient & Easy to Use</h2>
      <h2 className='about-text3'>We are here to guide you, with the best route.</h2>
      <ul  className="list list-disc ml-5 pl-6">
        <li>Go beyond logistics, make the world go round and revolutionize business.</li>
        <li>Logistics through innovation, dedication, and technology. ready, set, done.</li>
        <li>We take pride in serving our customers safely. together with passion.</li>
        <li>Imagination what we can easily see is only a small percentage.</li>
        <li>Quality never goes out of style. safety, quality, professionalism.</li>
      </ul>

      <h2 className='about-text2 pl-1 pb-2 mt-6'>We have a wide range of solution to your problem-</h2>
      <ol className='list-decimal ml-5 pl-6'>
        <li>Solutions and specialized
          <h2>Our aim is to optimize and improve the guidance so that we can give you the best service.</h2>
        </li>
        <li>Fastest vs cheapest route<h2>We provide multiple routes so you don't have to worry and you should not face any trouble.</h2></li>
        <li>Tracking made easy<h2>A tracking number for the entire process so that you can find the exact position. This process will help you.</h2></li>
      </ol>
    </div>
  )
}

export default About