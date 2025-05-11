import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
// import { createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPage from './Components/Projects/ProjectPage'
import Contact from './Components/Contact/Contact'
import ScrollToTop from './Components/ScrollToTop';

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
