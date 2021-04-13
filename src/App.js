import React from 'react'
import NavBar from './Components/Navbar'
import Main from './Components/Main'
import BottomNav from './Components/BottomNav'
import Grid from './Components/Grid'
import Card from './Components/Card'

import './App.css'

function App() {
    return (
        <div className="app">
          <NavBar />

          <Main />

          <Card />

          <Grid />

          <BottomNav />


        </div>
    )
}

export default App
