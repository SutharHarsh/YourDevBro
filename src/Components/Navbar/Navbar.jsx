import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const title = "<YourDevBro />"

  return (
    <div className='bg-[#F2F0FF] w-full flex justify-between px-6 py-8 items-center rounded-b-4xl'>
      <div>
        <h1 className='text-2xl cursor-pointer'>{title}</h1>
      </div>
      <div>
        <ul className='flex gap-8 items-center cursor-pointer'>
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
