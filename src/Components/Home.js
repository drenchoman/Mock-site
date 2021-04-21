import React, {useEffect} from 'react'
import Main from '../Components/Main'
import Grid from '../Components/Grid'
import BottomNav from '../Components/BottomNav'


function Home() {

  useEffect(()=> {
    window.scrollTo(0, 0);
    })
    return (<div className="homeContainer">
      <Main />
      <Grid />
      <BottomNav />

    </div>
    )
}

export default Home
