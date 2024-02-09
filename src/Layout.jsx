import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import image from './assets/logo.png'
import text from './assets/logotext.png'

function Layout() {
  return (
    <>
    <Header imge={image} logo={text}/>
    <Outlet />
    <Footer logo={text}/>
    </>
  )
}

export default Layout