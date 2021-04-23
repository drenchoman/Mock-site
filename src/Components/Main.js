import React from 'react'
import tupac from '../images/tupacnobg.png'
import scrollIntoView from 'scroll-into-view-if-needed'

function Main() {

const scroll = () => {
  const node = document.querySelector(".exploreTitle")
  const windowWidth = window.innerWidth
  if (windowWidth < 321 ){
    window.scrollTo({
      top: 525,
      behavior: 'smooth',
      })
  } else if (windowWidth < 570){
    window.scrollTo({
      top: 680,
      behavior: 'smooth',
      })
  }else {
    scrollIntoView(node, {
      scrollMode: 'if-needed',
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    })
  }

}
    return (
        <section className="mainContainer">
            <div className="mainWrapper">
              <div className="mainCta">
                <h1>Connecting you to the hottest vintage in NZ</h1>
                <h2>Over 50+ stores to explore </h2>
                <button onClick={scroll}>Explore</button>
              </div>
              <div className="mainImg">
                <img src= {tupac} alt="Girl posing with Tupac shirt"></img>
                </div>
                </div>
        </section>
    )
}

export default Main
