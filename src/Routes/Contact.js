import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'

function Contact() {
  return (
    <>
    <Navbar/>
     <Hero cName='hero-contact'
     heroImg="https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     title='Contact'
     buttonClass='hide'
     />
     <ContactForm/>
     <Footer/>
    </>
  )
}

export default Contact