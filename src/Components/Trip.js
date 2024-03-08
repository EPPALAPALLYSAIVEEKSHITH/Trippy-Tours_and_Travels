import "./TripStyles.css"
import TripData from "./TripData"
import React from 'react'

function Trip() {
  return (
    <div className="trip">
        <h1>Trips</h1>
        <p>You can discover unique 
        destinations using Maps.
        </p>
        <div className="tripcard">
            <TripData
                  src1="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSjuLg9doPpdcH2F4H5w7LewkDCG_IfuQyfL8BvaDpGT9Op43j68wxaDSr-w28cb_1PeIaPEb-RqAjjLZZ0Vkrp1992mXWtfh-Zu11jSQ"
                  heading="Trip in Malaysia"
                  text="Malaysia, in Southeast Asia, is celebrated for 
                  its cultural diversity, vibrant cities like Kuala 
                  Lumpur, and landmarks such as the Petronas Towers. 
                  The economy thrives on manufacturing and palm oil 
                  production. The country's cuisine, influenced by Malay,
                   Chinese, and Indian flavors, is a highlight. 
                   Malaysia's natural beauty includes lush rainforests 
                   and pristine beaches."
            />
            <TripData
                   src1="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSXgGdfRXb7fi5bsFinFuopuvVRi4CVDgLa7Nwtvkq1wg_GBXCmjoNFNzRaN28sqXIRENgxxHND7Nfv-ZZDsYScSAA233FeB8cjMCSijA"
                   heading="Trip in Singapore"
                   text="Singapore, a city-state in Southeast Asia, is 
                   renowned for its modernity, efficient infrastructure,
                    and cultural diversity. The bustling city of Singapore
                     boasts iconic landmarks like the Marina Bay Sands 
                     and the Gardens by the Bay. The economy is driven by 
                     finance, technology, and trade. Singapore's cuisine 
                     is a delectable mix of Chinese, Malay, Indian, and 
                     other influences, with hawker centers offering 
                     diverse culinary experiences."
            />
            <TripData
                    src1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDErLVJqPYgFuMrhCFofb-QRlEg_V5YUYS3A&usqp=CAU"
                    heading="Trip in Dubai"
                    text="Dubai, a city-state in the United Arab Emirates
                    , stands as a symbol of modern extravagance and 
                    innovation in the Middle East. Renowned for its 
                    futuristic skyline, Dubai is home to architectural 
                    marvels like the Burj Khalifa and the Palm Jumeirah. 
                    The economy thrives on tourism, real estate, and 
                    trade, with Dubai serving as a global business hub." 
            />        
        </div>
        
    </div>
  )
}

export default Trip