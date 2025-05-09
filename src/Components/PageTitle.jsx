import React from 'react'

function PageTitle({title, description}) {
    return (
        <div className='flex items-center justify-center gap-4 px-20 my-10'>
            <h1 className='text-xl bg-[#836BFC] text-white rounded-md p-2'>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default PageTitle
