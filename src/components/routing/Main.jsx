import React from 'react'
import { createBrowserRouter, createRoutesFromElements , Route, RouterProvider  } from 'react-router-dom'
import Layout from './Layout'
import Home from '../../pages/Home'
import Courses from "../../pages/Courses"
import Testimonial from "../../pages/Testimonial"
import Mentors from '../../pages/Mentors'

const Main = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout/>}>
                <Route path='/#home' element={<Home/>}/>
                <Route path='/#courses' element={<Courses/>}/>
                <Route path='/#testimonial' element={<Testimonial/>}/>
                <Route path='/#mentor' element={<Mentors/>}/>
            </Route>
        )
    );
  return (
    <RouterProvider router={router}/>
  )
}

export default Main