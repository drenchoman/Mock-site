import React from 'react'
import tupac from '../images/tupacnobg.png'
import scrollIntoView from 'scroll-into-view-if-needed'

function Main() {

const scroll = () => {
  const node = document.querySelector("#explore")
  const windowWidth = window.innerWidth
  if (windowWidth < 570 ){
    window.scrollTo({
      top: 680,
      behavior: 'smooth',
      })


    // scrollIntoView(node, {
    //   scrollMode: 'if-needed',
    //   block: 'start',
    //   inline: 'center',
    //   behavior: 'smooth',
    // })
  } else {
    scrollIntoView(node, {
      scrollMode: 'if-needed',
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    })
  }

}
    return (
        <div className="mainContainer">

            <div className="mainDiv">

            <div className="mainCta">
              <h2>Connecting you to the hottest vintage in NZ</h2>
              <button onClick={scroll}>Explore</button>
            </div>
            <div className="girlImg">
              <img src= {tupac} alt="Girl posing with Tupac shirt"></img>
            </div>


          </div>


        </div>
    )
}

export default Main
