import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import PageTitle from '../PageTitle'

function About() {
  return (
    <div>
      <Navbar />

      <PageTitle title="About This Site" description="If it works for me, it might just work for you." />

      <div className='lg:px-20 md:px-20 pt-10 pb-20 sm:px-5 sm:text-justify'>
        Hi there! 👋 <br />
        Welcome to a space built for developers who love clean code, real projects, and zero-nonsense learning. <br /><br />

        I created this site to share ready-to-use code snippets, mini-projects, and tools that actually help you build — not just copy. Every line here is tested, readable, and built with love (and caffeine ☕).<br /><br />

        Whether you're a beginner figuring out flexbox or a seasoned dev tired of rewriting the same login form for the 10th time — you're in the right place.<br /><br />

        <h1 className='text-lg font-bold pb-2'>🎯 What You’ll Find Here:</h1>
        <ul className='lg:px-10 md:px-10 list-disc sm:text-left sm:pr-5 sm:pl-10'>
          <li>💡 Handy snippets for HTML, CSS, JavaScript, and more</li>
          <li>🚀 Beginner to intermediate projects you can clone or tweak</li>
          <li>🛠️ Tools and templates that save you time</li>
          <li>📚 Occasional blogs for tips, tricks, and best practices</li>
        </ul> <br />

        <h1 className='text-lg font-bold pb-2'>🙌 Let’s Connect</h1>
        Have feedback, ideas, or just want to say hello? Contact me — I’d love to hear from you.
      </div>

      <Footer />
    </div>
  )
}

export default About
