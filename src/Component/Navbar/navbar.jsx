import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <div className='nav_bar'>
      <img className='nav_logo' src="https://i.ibb.co/JyLk2f0/logo.png"  alt="" />
      <div>
        <ol className='nav_list'>
          <li>Home</li>
          <li>About me</li>
          <li>My Skill</li>
          <li>My Project</li>
        </ol>
      </div>
    </div>
  )
}

export default navbar;
