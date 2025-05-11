import React from 'react'

function PageTitle({title, description}) {
    return (
        <div className='flex lg:pt-0 md:pt-0 lg:flex-row items-center justify-center gap-4 lg:px-20 my-10 md:flex-col sm:flex-col sm:px-10 sm:pt-15'>
            <h1 className='text-xl bg-[#836BFC] text-white rounded-md p-2'>{title}</h1>
            <p className='lg:text-left md:text-center sm:text-center'>{description}</p>
        </div>
    )
}

export default PageTitle
