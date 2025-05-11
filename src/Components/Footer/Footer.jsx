import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const title = "<YourDevBro />"
    return (
        <div className='bg-[#1C1072] text-white'>
            {/* up part */}
            <div className='flex lg:flex-row justify-between lg:px-20 pt-10 pb-20 md:flex-col md:gap-12 sm:flex-col sm:gap-12 sm:px-10'>
                {/* left part */}
                <div>
                    <h1 className='text-2xl pb-8 lg:text-left md:text-center sm:text-center'>{title}</h1>
                    <p className='pb-4 lg:text-left lg:px-0 lg:pr-20 md:text-center md:px-20 sm:text-center'>YourDevBro is your chill coding buddy on the internet — sharing clean, real-world code that actually works.</p>
                    <ul className='flex gap-4 items-center lg:justify-start md:justify-center sm:justify-center'>
                        <li><img src="/Facebook.png" alt="" /></li>
                        <li><img src="/Instagram.png" alt="" /></li>
                        <li><img src="/Twitter.png" alt="" /></li>
                        <li><img src="../public/Linkedin.png" alt="" /></li>
                    </ul>
                </div>

                {/* right part */}
                <div>
                    <h1 className='text-xl font-bold pb-6 md:text-center sm:text-center lg:text-left'>Links</h1>
                    <ul className='flex flex-col gap-2 cursor-pointer'>
                        <Link to="/" className='lg:text-left md:text-center sm:text-center'>Home</Link>
                        <Link to="/projects" className='lg:text-left md:text-center sm:text-center'>Projects</Link>
                        {/* <Link to="/blog">Blog</Link> */}
                        <Link to="/about" className='lg:text-left md:text-center sm:text-center'>About</Link>
                        <Link to="/contact" className='lg:text-left md:text-center sm:text-center'>Contact Me</Link>
                    </ul>
                </div>
            </div>

            {/* down part */}
            <div className='lg:px-20 md:px-20 sm:flex sm:flex-col sm:justify-center'>
                <div className='border-t-1'></div>
                <div className='flex lg:flex-row md:flex-row lg:justify-between md:justify-between sm:flex-col sm:text-center pt-6 pb-4 lg:px-0 md:px-0 sm:px-10'>
                    <h1>Copyright @ 2025 YourDevBro</h1>
                    <h1>All Rights Reserved</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
