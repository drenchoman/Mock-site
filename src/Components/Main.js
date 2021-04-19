import React from 'react'
import Sidebar from '../Components/Sidebar'
import SidebarRight from '../Components/SideBarRight'
import tupac from '../images/tupacnobg.png'

function Main() {

const exploreStore = () => {
  window.location.href='#explore'
}

    return (
        <div className="mainContainer">
          <Sidebar />

            <div className="mainDiv">

            <div className="mainCta">
              <h2>Connecting you to the hottest vintage in NZ</h2>
              <button onClick={exploreStore}>Explore</button>
            </div>
            <div className="girlImg">
              <img src= {tupac} alt="Girl posing with Tupac shirt"></img>
            </div>


          </div>
  <SidebarRight />


        </div>
    )
}

export default Main
