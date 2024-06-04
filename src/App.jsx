import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={ <h1>My App</h1> } />
    // <Route path='/about' element={ <h1>My App</h1> } />
    
  )
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App