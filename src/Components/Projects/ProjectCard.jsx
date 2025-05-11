import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({ title }) {
    return (
        <div>
            {/* project cards */}
            <div className='flex justify-center pb-10 md:pb-10'>
                {/* project card */}
                <div className={`bg-[#F3F3F3] flex lg:flex-row md:flex-row sm:flex-col-reverse sm:gap-15 sm:mx-4 mb-10 lg:justify-between items-center border-1 w-130 p-8 rounded-4xl shadow-[0_7px_0px_0px] cursor-pointer hover:shadow-[0_0_0_0]  duration-200`}>
                    {/* left part */}
                    <div className='flex flex-col justify-between sm:gap-5 sm:justify-center lg:gap-20 md:gap-20 pr-4'>
                        <h1 className='text-3xl font-bold '>{title}</h1>
                        {/* visit link */}
                        <Link to="/projects" className='flex lg:justify-start 
                        md:justify-start sm:justify-center'>
                            <div className='flex items-center gap-2 cursor-pointer sm:bg-gray-700 lg:bg-gray-500 md:bg-gray-500 text-white w-40 pr-2 rounded-3xl hover:bg-[#191A23] duration-200 hover:text-lg hover:w-45'>
                                <img src="../public/link-arrow.png" alt="link-arrow" />
                                <h1>Visit Project</h1>
                            </div>
                        </Link>
                    </div>
                    {/* right part */}
                    <div>
                        <img src="../public/illustration.png" alt="project vector"
                            className='w-40'
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProjectCard
