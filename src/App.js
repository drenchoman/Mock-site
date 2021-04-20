import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Directory from './Components/Directory'
import About from './Components/About'
import Blog from './Components/Blog'
import Navbar from './Components/Navbar'
import './App.css'

function App() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Directory" component={Directory} />
          <Route path="/Blog" component={Blog} />
        </Switch>
        </div>
      </BrowserRouter>
    )
}

export default App
