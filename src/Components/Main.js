import React from 'react'
import Sidebar from '../Components/Sidebar'
import SidebarRight from '../Components/SideBarRight'
import tupac from '../images/tupacnobg.png'
import scrollIntoView from 'scroll-into-view-if-needed'

function Main() {

const scroll = () => {
  const node = document.querySelector("#explore")
  scrollIntoView(node, {
    scrollMode: 'if-needed',
    block: 'start',
    inline: 'end',
    behavior: 'smooth',
  })
}
    return (
        <div className="mainContainer">
          <Sidebar />

            <div className="mainDiv">

            <div className="mainCta">
              <h2>Connecting you to the hottest vintage in NZ</h2>
              <button onClick={scroll}>Explore</button>
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
