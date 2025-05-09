import React from 'react'

function Header() {
    return (
        <header className='flex'>
            {/* left side */}
            <div className='px-20 py-20'>
                {/* Heading 1 */}
                <div className='text-6xl'>
                    <h1>I BROKE IT</h1>
                    <h1>I FIXED IT</h1>
                    <h1>I MADE IT PRETTY</h1>
                    <h1 className='text-3xl font-bold pt-2 text-[#190266]'>- JUST COPY IT LIKE A LEGEND</h1>
                </div>
                {/* Heading 2 */}
                <div className='py-8 pr-15'>
                    <p>Hundreds of hours spent debugging, researching, and rewriting — all distilled into clean, reusable code snippets.<br /><br /> Whether you're building your first navbar or your fiftieth dashboard, this is where real dev work meets real shortcuts.</p>
                </div>
                        
                    <button className='bg-[#00FFA1] text-[#190266] p-2 px-4 font-bold rounded-lg'>Explore Projects</button>
            </div>

            {/* right side */}
            <div>
                <img src="../public/main-img.jpg" 
                className="w-200 pr-10"
                alt="main-image" />
            </div>
        </header>
    )
}

export default Header
