import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const title = "<YourDevBro />"

  return (
    <div className='flex bg-[#F2F0FF] lg:w-full max-lg:flex-col min-lg:flex-row min-lg:justify-between px-6 py-8 rounded-b-4xl min-md:flex-row min-md:justify-between max-md:flex-col md:gap-8 sm:flex-col'>
      <div>
        <h1 className='text-2xl cursor-pointer font-bold md:text-center sm:text-center sm:pb-5'>{title}</h1>
      </div>
      <div>
        <ul className='flex gap-8 items-center lg:flex-row md:flex-row max-md:justify-center cursor-pointer md:gap-12 max-sm:flex-col max-sm:justify-center'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          {/* <Link to="/blog">Blog</Link> */}
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact" className='border-1 p-2 px-4 rounded-md'>Contact Me</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
