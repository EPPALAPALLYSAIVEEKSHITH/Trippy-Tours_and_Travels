import React from 'react'
import Navbar from '../Components/Navbar'
import AboutImage from "../Assets/2.jpg"
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'

function About() {
  return (
    <>
    <Navbar/>
     <Hero cName='hero-about'
     heroImg={AboutImage}
     title='About'
     buttonClass='hide'
     />
     <AboutUs/>
     <Footer/>
    </>
  )
}

export default About