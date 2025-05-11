import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ProjectCard from '../Projects/ProjectCard'
import PageTitle from '../PageTitle'

function Home() {
    return (
        <>
            <Navbar />
            <Header />

            {/* Project Card Show */}
            <PageTitle title="Recent Projects" description={
                <>
                    Ready-to-use projects you can learn from or launch fast.<br />Clean code, real features, no fluff.
                </>} />

            <div className='flex lg:flex-row justify-center lg:gap-20 md:flex-col md:gap-0 sm:flex-col'>
                <ProjectCard title="Netflix Clone" />
                <ProjectCard title="YourDevBro" />
            </div>
            
            <Footer />
        </>
    )
}

export default Home
