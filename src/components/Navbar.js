import React from 'react'
import "./Navbar.css"
import img from './images/img1.png'

function Navbar() {
  return (
    <div className='Main'>
      <div className='logo'><img src={img} alt="" /></div>
    <nav className='nav-links'>
      <li><a href="/src/components/Home.js">Home</a></li>
      <li><a href="/src/components/About.js.js">About</a></li>
      <li><a href="/src/components/Develope.js">Develop skills</a></li>
      <li><a href="/src/components/Attendance.js">Attendance</a></li>
    </nav>

    </div>
  )
}

export default Navbar
