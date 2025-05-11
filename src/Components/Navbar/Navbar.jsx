import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const title = "<YourDevBro />"

  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`flex bg-[#F2F0FF] lg:w-full lg:flex-row lgmin:flex-row px-6 py-8 rounded-b-4xl md:flex-col md:gap-8 mdmin:flex-col max-sm:flex-row sm:justify-between sm:items-center sm:gap-5 overflow-hidden transform transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-y-0 max-sm:h-70" : "-translate-y-0 max-sm:h-20"} `}>
      <div>
        <h1 className='lg:text-2xl md:text-2xl cursor-pointer font-bold md:text-center sm:text-center sm:text-2xl max-sm:fixed max-sm:top-4'>{title}</h1>
      </div>
      <div>
        <ul className={`lg:flex md:flex mdmin:flex mdmin:gap-8 lg:gap-8 items-center lg:flex-row md:flex-row max-md:justify-center cursor-pointer md:gap-12 max-sm:absolute max-sm:top-44 max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2 max-sm:-translate-y-1/2 max-sm:flex max-sm:gap-5 max-sm:flex-col max-sm:justify-center ${isMenuOpen ? "max-sm:flex" : "transition-opacity duration-75 ease-in max-sm:opacity-0"}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          {/* <Link to="/blog">Blog</Link> */}
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact" className='border-1 p-2 px-4 rounded-md'>Contact Me</NavLink>
        </ul>
        <div className='md:hidden mdmin:hidden max-sm:absolute max-sm:top-5 max-sm:right-6'>
          {isMenuOpen ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} onClick={() => (onToggleMenu())}>
              <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} onClick={() => (onToggleMenu())}>
              <path d="M4 5L20 5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M4 12L20 12" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M4 19L20 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          }

        </div>
      </div>
    </div>
  )
}

export default Navbar
