import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import ServiceImage from "../Assets/4.jpg"
import Footer from '../Components/Footer'
import Trip from '../Components/Trip'

function Service() {
  return (
    <>
    <Navbar/>
     <Hero cName='hero-about'
     heroImg={ServiceImage}
     title='Service'
     buttonClass='hide'
     />
     <Trip/>
     <Footer/>
    </>
  )
}

export default Service