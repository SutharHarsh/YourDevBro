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

            <div className='flex justify-center gap-20'>
                <ProjectCard title="Prana Flow Website" bgColor="[#F3F3F3]" />
                <ProjectCard title="YourDevBro Platform" bgColor="[#00FFA1]" />
            </div>
            
            <Footer />
        </>
    )
}

export default Home
