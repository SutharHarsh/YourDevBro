import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import PageTitle from '../PageTitle'

function Contact() {
  return (
    <div>
      <Navbar />
      <PageTitle title="Contact Me" description="Got a question? Let's talk." />

      <div className='px-20 text-center mb-20'>
        <h1 className='font-bold text-2xl'>Email:</h1>
        <p className='text-xl'>yourdevbro@gamil.com</p>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
