import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import menu from '../images/menu.svg'


function Navbar() {
  const [toggle, setToggle]=useState(false)

  const changeToggle = () => {
    setToggle(!toggle)
    console.log(toggle)
  }
  const changeToggleIfOpen = () => {
    if (toggle === true){
      setToggle(!toggle)
    } return
  }

    return (
        <nav className="navBox">
          <div className="logoContainer">
            <span className="navLogo">
              <Link style={{textDecoration: 'none'}} to="/">Vintage Clothing</Link>
            </span>
            <span className="navLogo1">
              <Link style={{textDecoration: 'none'}} to="/">.co.nz</Link>
            </span>
          </div>

{/* <button className="navButton" onClick={changeToggle}><img src={menu} alt="Menu"></img></button> */}
  <ul className={toggle ? "navLinks show-nav" : "navLinks hide-nav " }>
    <li className="aboutNav">
      <Link onClick={changeToggleIfOpen} style={{textDecoration: 'none'}} to="/About">About</Link>
    </li>
    <li className="blogNav">
      <Link onClick={changeToggleIfOpen} style={{textDecoration: 'none'}} to="/Blog">Blog</Link>
    </li>
    <li className="directNav">
      <Link onClick={changeToggleIfOpen} style={{textDecoration: 'none'}} to="/Directory">Directory</Link>
    </li>
  </ul>



</nav>

    )
}

export default Navbar
