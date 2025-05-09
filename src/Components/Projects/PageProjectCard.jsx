import React from 'react'

function PageProjectCard({ title, description, bgColor }) {
    return (
        <div>
            {/* project cards */}
            <div className='flex justify-center pb-10'>
                {/* project card */}
                <div className={`bg-${bgColor} w-250 flex mb-10 justify-between items-center border-1 p-8 rounded-4xl shadow-[0_5px_0px_0px] cursor-pointer`}>
                    {/* left part */}
                    <div className='flex flex-col justify-between gap-20 pr-4'>
                        <div>
                            <h1 className='text-3xl font-bold pb-2'>{title}</h1>
                            <p>{description}</p>
                        </div>

                        {/* visit link */}
                        <div className='flex items-center gap-2'>
                            <img src="../public/link-arrow.png" alt="link-arrow" />
                            <h1>Visit Project</h1>
                        </div>
                    </div>
                    {/* right part */}
                    <div>
                        <img src="../public/Project.png" alt="project vector"
                            className='w-50'
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PageProjectCard
