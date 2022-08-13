import React from 'react'
import { Link } from 'react-router-dom'

function ResponsiveNav() {
  return (
      <div className='responsive-nav'>
              <Link to='home'>Home</Link>
              <Link to='home'>About</Link>
              <Link to='home'>Contact Us</Link>
    </div>
  )
}

export default ResponsiveNav