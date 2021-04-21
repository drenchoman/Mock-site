import React from 'react'
import about from '../images/about.jpg'
function Aboutcont() {
    return (
        <div className="aboutContainer">
          <div className="aboutTitle">
            <h2 className="titleA">About Us</h2>
          </div>
          <div>
            <div className="aboutMain">
              <div className="aboutImage">
                <img alt="Lady sifting through clothing on a rack" src={about}></img>
              </div>
              <div className="aboutContent">
                <p><strong>Vintage Clothing.co.nz</strong> aims to connect you to local thrift, vintage stores & resellers within New Zealand.</p>
                <p>These are often small, independent businesses who may find it difficult to reach an audience.</p>
                <p>Whether you're looking for a hoodie for the winter months, a pin-up dress for your next 50's themed party or some fresh sneakers for your next fit, we hope we can help.</p>
                <p>If you would like to feature on our site, you can contact us on Instagram or email us at <strong>email.com</strong></p>
            </div>

            </div>
          </div>
        </div>
    )
}

export default Aboutcont
