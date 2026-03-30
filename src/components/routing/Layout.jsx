import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from "../../pages/Footer"

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layout