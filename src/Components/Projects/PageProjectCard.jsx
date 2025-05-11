import React from 'react'

function PageProjectCard({ title, description, link, demoLink }) {
    return (
        <div>
            {/* project cards */}
            <div className='flex justify-center pb-10'>
                {/* project card */}
                <div className={`bg-[#F3F3F3] lg:w-250 md:w-250 sm:w-100 flex lg:flex-row md:flex-row md:justify-between mb-10 lg:justify-between sm:flex-col-reverse sm:justify-center sm:gap-15 sm:px-0 lg:px-10 md:px-10 items-center border-1 p-8 rounded-4xl shadow-[0_5px_0px_0px] cursor-pointer`}>
                    {/* left part */}
                    <div className='flex flex-col lg:justify-between sm:gap-5 lg:gap-20 lg:pr-4 md:pr-4 sm:px-2'>
                        <div className='sm:text-center lg:text-left md:text-left'>
                            <h1 className='lg:text-3xl md:text-3xl sm:text-2xl font-bold pb-2'>{title}</h1>
                            <p className='lg:px-0 md:px-0 sm:px-5'>{description}</p>
                        </div>

                        {/* visit link */}
                        <div className='flex lg:flex-row md:flex-col md:text-left lg:items-center lg:gap-2 md:gap-2 sm:flex-col sm:text-center sm:gap-2'>
                            <a target='_blank' href={demoLink}>
                                <button className='bg-black text-white rounded-lg p-3 cursor-pointer hover:bg-[#836BFC] hover:text-lg duration-75'>Live Demo</button>
                            </a>

                            <a target='_blank' href={link}>
                                <button className='bg-black text-white rounded-lg p-3 cursor-pointer hover:bg-[#836BFC] hover:text-lg duration-75'>Source Code</button>
                            </a>
                        </div>
                    </div>

                    <div className="flex-shrink-0 w-[220px] h-[220px] flex justify-center items-center">
                        <img
                            src="/Project.png"
                            alt="project vector"
                            className="w-full h-full object-contain"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PageProjectCard
