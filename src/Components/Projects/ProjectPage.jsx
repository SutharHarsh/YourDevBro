import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import PageProjectCard from './PageProjectCard'

function ProjectPage() {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col justify-center px-20 mt-20'>
                <PageProjectCard title="Prana Flow Website" description="This is a description of the project" bgColor="[#F3F3F3]" />
                <PageProjectCard title="YourDevBro Platform" description={
                    <>
                    This is a free platform for the Developers where developers can <br /> copy and paste the React Component and make their website <br /> super to super-duper!!" 
                    </> } 
                    bgColor="[#F3F3F3]" />
            </div>
            <Footer />
        </div>
    )
}

export default ProjectPage
