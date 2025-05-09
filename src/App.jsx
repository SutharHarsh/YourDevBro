import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProjectPage from './Components/Projects/ProjectPage'
import Contact from './Components/Contact/Contact'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/projects",
      element: <ProjectPage />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ])

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}

export default App
