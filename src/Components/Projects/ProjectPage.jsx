import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import PageProjectCard from './PageProjectCard'
import PageTitle from '../PageTitle'

function ProjectPage() {
    return (
        <div>
            <Navbar />
            <PageTitle title="Project Vault" description="Skip the setup struggles — build, learn, and flex your dev muscles." />
            <div className='flex flex-col justify-center lg:px-20 md:px-20 sm:px-5 mt-20'>
                <PageProjectCard 
                title="Netflix Clone" 
                description="Netflix responsive clone using Html and CSS" 
                link="https://github.com/SutharHarsh/Netflix-Clone.git"
                demoLink="https://netflix-clone-seven-eosin.vercel.app/"
                />

                <PageProjectCard 
                title="YourDevBro Platform"  
                description={
                    <>
                    This is a free platform for the Developers where developers can <br /> copy and paste the code and make their website <br /> super to super-duper!! 
                    </> } 
                link="https://github.com/SutharHarsh/YourDevBro.git"  
                demoLink="#"  
                />
            </div>
            <Footer />
        </div>
    )
}

export default ProjectPage
