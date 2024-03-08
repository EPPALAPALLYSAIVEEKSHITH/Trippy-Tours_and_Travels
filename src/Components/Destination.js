import React from 'react'
import "./DestinationStyles.css"
import DestinationData from './DestinationData'

function Destination() {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours give you opportunity to see a lot, within a timeframe</p>
        <DestinationData
        cName="first-des"
        heading="Jammu and Kashmir - Paradise on Earth"
        text="Jammu and Kashmir is home to 
        several valleys such as the Kashmir 
        Valley, Chenab Valley, Sindh Valley 
        and Lidder Valley. 
        Some major tourist attractions in 
        Jammu and Kashmir are Srinagar, 
        with its renowned Dal Lake and 
        Mughal Gardens, Gulmarg, Pahalgam, 
        Bhaderwah, Patnitop and Jammu."
        src1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWadcJoFXD-3Y0ix4jMYq1XFQRT9Sq7l1MV2rQVtoPEt1a43pYjMBnVxC7bzppX4FjPzk&usqp=CAU"
        src2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0uRKO8Ml9CZQ2IlKP-iyWyPzDGlsYZp8SQ&usqp=CAU"       
       />
       <br/>
       <hr/>
       <DestinationData
       cName="first-des-reverse"
        heading="Ooty - Queen of Hill Stations"
        text="Ooty, short for Ootacamund, is a popular
         hill station located in the Nilgiri Hills of Tamil Nadu, 
         India. Known for its breathtaking landscapes, cool climate, 
         and lush greenery, Ooty is a favored destination for tourists 
         seeking a tranquil escape from the hustle and bustle of city 
         life. The town is situated at an altitude of 2,240 meters 
         (7,350 feet) above sea level and offers scenic views of tea 
         gardens, dense forests, and the Nilgiri mountain range. 
         Ooty is renowned for its colonial charm, featuring 
         Victorian-era architecture, well-maintained gardens like the 
         Botanical Gardens, and the iconic Nilgiri Mountain Railway that 
         winds its way through picturesque terrain. The pleasant weather,
          vibrant flora, and various attractions make Ooty a popular
           destination for nature lovers and those seeking a peaceful 
           retreat."
        src1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNWAlI1pwBO45lyJIBvM0GDguGgrZbllv2A&usqp=CAU"
        src2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kugU01dK5FgOdf7g-Ug3CM9CXEW73gFN_w&usqp=CAU"       
       />
    </div>
  )
}

export default Destination