import React from 'react'
import Navbar from './Navbar'
import Profile from './Profile'
import Footer from './Footer'
import About from './About'
import Services from './Services'
import Contact from './Contact'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Profile/>
    <About/>
  <Services/>
  <Contact/>
    <Footer/>
    </>

  )
}

export default Home