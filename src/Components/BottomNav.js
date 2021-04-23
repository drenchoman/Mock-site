import React from 'react'
import CopyRight from '../Components/CopyRight'
import insta from '../images/insta.svg'
import facebook from '../images/facebook.svg'
import {Link} from 'react-router-dom'

function BottomNav() {
    return (
        <section className="footer">
          <div className="footerLeftContainer">
            <div className="footerCTA">
              <p><strong>Vintage Clothing.co.nz</strong> aims to connect you to local thrift & vintage stores within New Zealand.</p>
              <p>These are often small, independent businesses who may find it difficult to reach an audience. </p>
              <p>If you find this site valuable then please let us know, we love your feedback. </p>
            </div>
            <CopyRight />
          </div>

          <div className="footerRightContainer">
            <div className="siteLinks">
              <h4 className="linksHeader aboutLink">About Us</h4>
              <ul className="botNavLinks">
                <Link style={{textDecoration: 'none'}} to="/about">
                  <li className="aboutNav">About</li>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/blog">
                  <li className="blogNav">Blog</li>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/directory">
                  <li className="directNavFooter">Directory</li>
                </Link>
              </ul>
            </div>

            <div className="footerSocialLinks">
              <h4 className="linksHeader">Our Socials</h4>
                <a href='https://www.instagram.com'><img src={insta} alt="Instagram Icon"></img></a>
                <a href='https://www.facebook.com'><img src={facebook} alt="Facebook Icon"></img></a>
            </div>
          </div>

        </section>
    )
}

export default BottomNav
