import React, {useEffect} from 'react'
import Main from '../Components/Main'
import Grid from '../Components/Grid'
import BottomNav from '../Components/BottomNav'


function Home() {

  useEffect(()=> {
    window.scrollTo(0, 0);
    })
    return (<>
      <Main />
      <Grid />
      <BottomNav />

    </>
    )
}

export default Home
