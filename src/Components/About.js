import React, {useEffect} from 'react'
import BottomNav from '../Components/BottomNav'
import AboutCont from '../Components/AboutCont'
function About() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  })
    return(
        <div className="aboutPage">
        <AboutCont />
        <BottomNav/>
        </div>
    )
}

export default About
