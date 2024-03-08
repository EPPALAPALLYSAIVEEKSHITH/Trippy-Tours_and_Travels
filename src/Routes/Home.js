import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Destination from '../Components/Destination'
import Trip from '../Components/Trip'
import Footer from '../Components/Footer'
function Home() {
  return (
    <>
    <Navbar/>
     <Hero cName='hero' 
     heroImg='https://plus.unsplash.com/premium_photo-1676385777209-1d435cc69c5a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG91dGRvb3J8ZW58MHx8MHx8fDA%3D'
     title='Captivating journeys await your presence'
     text='Choose your favourite Destination'
     url='/'
     buttontext='Travel Plan'
     buttonClass='show'
     />
     <Destination/>
     <Footer/>
    </>
  )
}

export default Home