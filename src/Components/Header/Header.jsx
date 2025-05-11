import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse'>
            {/* left side */}
            <div className='lg:pl-20 lg:py-10 md:px-0 md:py-10'>
                {/* Heading 1 */}
                <div className='lg:text-6xl lg:text-left md:text-6xl md:text-center sm:text-center sm:text-4xl'>
                    <h1>I BROKE IT</h1>
                    <h1>I FIXED IT</h1>
                    <h1>I MADE IT PRETTY</h1>
                    <h1 className='lg:text-3xl font-bold pt-2 text-[#190266] sm:text-xl'>- JUST COPY IT LIKE A LEGEND</h1>
                </div>
                {/* Heading 2 */}
                <div className='lg:text-left lg:px-0 lg:pt-8 lg:pr-15 md:text-center md:px-20 md:text-xl md:pt-10 sm:text-center sm:px-5 sm:py-8'>
                    <p>Hundreds of hours spent debugging, researching, and rewriting — all distilled into clean, reusable code snippets.<br /><br /> Whether you're building your first navbar or your fiftieth dashboard, this is where real dev work meets real shortcuts.</p>
                </div>

                    <Link to="/projects" className='flex lg:justify-start md:justify-center md:pt-12 sm:justify-center'>
                        <button className='bg-black text-white p-2 px-4 font-bold rounded-lg hover:bg-[#836BFC] duration-200 hover:text-lg animate-bounce cursor-pointer'>Explore Projects</button>
                    </Link>


            </div>

            {/* right side */}
            <div className='md:flex md:justify-center'>
                <img src="/main-img.jpg"
                    className="lg:w-200 lg:pr-5 lg:py-10 md:w-110 md:pt-8 sm:p-4"
                    alt="main-image" />
            </div>
        </header>
    )
}

export default Header
