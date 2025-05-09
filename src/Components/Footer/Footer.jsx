import React from 'react'

function Footer() {
    const title = "<YourDevBro />"
    return (
        <div className='bg-[#1C1072] text-white'>
            {/* up part */}
            <div className='flex justify-between px-20 pt-10 pb-20'>
                {/* left part */}
                <div>
                    <h1 className='text-2xl pb-8'>{title}</h1>
                    <p className='pb-4'>YourDevBro is your chill coding buddy on the internet — sharing clean, real-world code that actually works.</p>
                    <ul className='flex gap-4 items-center'>
                        <li><img src="../public/Facebook.png" alt="" /></li>
                        <li><img src="../public/Instagram.png" alt="" /></li>
                        <li><img src="../public/Twitter.png" alt="" /></li>
                        <li><img src="../public/Linkedin.png" alt="" /></li>
                    </ul>
                </div>

                {/* right part */}
                <div>
                    <h1 className='text-xl font-bold pb-6'>Links</h1>
                    <ul className='flex flex-col gap-2 cursor-pointer'>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Contact Me</li>
                    </ul>
                </div>
            </div>

            {/* down part */}
            <div className='px-20'>
                <div className='border-t-1'></div>
                <div className='flex justify-between pt-6 pb-4'>
                    <h1>Copyright @ 2025 YourDevBro</h1>
                    <h1>All Rights Reserved</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
