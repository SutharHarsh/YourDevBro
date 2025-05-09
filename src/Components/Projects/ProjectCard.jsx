import React from 'react'

function ProjectCard({title, bgColor}) {
    return (
        <div>
            {/* project cards */}
            <div className='flex justify-center pb-20'>
                {/* project card 1 */}
                <div className={`bg-${bgColor} flex mb-10 justify-between items-center border-1 w-130 p-8 rounded-4xl shadow-[0_5px_0px_0px] cursor-pointer`}>
                    {/* left part */}
                    <div className='flex flex-col justify-between gap-20 pr-4'>
                        <h1 className='text-3xl font-bold '>{title}</h1>
                        {/* visit link */}
                        <div className='flex items-center gap-2'>
                            <img src="../public/link-arrow.png" alt="link-arrow" />
                            <h1>Visit Project</h1>
                        </div>
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
