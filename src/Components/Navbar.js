import React, {useState} from 'react'
import menu from '../images/menu.svg'

function Navbar() {
  const [toggle, setToggle]=useState(false)

  const changeToggle = () => {
    setToggle(!toggle)
    console.log(toggle)
  }

    return (
        <div className="navBox">
          <span className="navLogo">Vintage Clothing</span>
          <span className="navLogo1">.co.nz</span>
<button className="navButton" onClick={changeToggle}><img src={menu} alt="Menu"></img></button>

            <ul className={toggle ? "navLinks show-nav" : "navLinks hide-nav " }>
              <li className="aboutNav">About</li>
              <li className="blogNav">Blog</li>
              <li className="contactNav">Contact</li>
            </ul>

        </div>
    )
}

export default Navbar
