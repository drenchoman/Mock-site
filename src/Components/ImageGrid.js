import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import img1 from '../images/1.webp'
import img2 from '../images/2.webp'
import img3 from '../images/3.webp'
import img4 from '../images/4.webp'
import img5 from '../images/5.webp'
import img6 from '../images/6.webp'
import img7 from '../images/7.webp'
import img8 from '../images/8.webp'
import img9 from '../images/9.webp'
import img10 from '../images/10.webp'
import b from '../images/b.webp'
import c from '../images/c.webp'
import n from '../images/n.webp'
import v from '../images/v.webp'
import x from '../images/x.webp'
import z from '../images/z.webp'
import insta from '../images/insta.svg'
import facebook from '../images/facebook.svg'
import arrow from '../images/flip.svg'
import globe from '../images/globe.svg'


function ImageGrid(props) {

const images = [{
  id: 1,
  src: img1,
  alt: "Girl in blue shirt and white ripped jeans",
  storeName: "Home Vintage",
  items: ["Nascar Tees", "Hype-Beast", "90s Vintage"]
},
{
  id: 2,
  src: img2,
  alt: "Girl in red jacket standing in wheat field",
  storeName: "Platypus",
  items: ["Tees", "Bric-a-brac", "Womenswear"]
},
{
  id: 3,
  src: img3,
  alt: "Girl sitting on top of pool diving board with a fan of cash",
  storeName: "Rebel Sport",
  items: ["Shoes", "Jackets", "Menswear"]
},
{
  id: 4,
  src: img4,
  alt: "Girl posing in room with green jumper on",
  storeName: "Stirling",
  items: ["Nascar Tees", "Hype-Beast", "90s Vintage"]
},
{
  id: 5,
  src: img5,
  alt: "Guy in yellow top, pale blue jeans and nike shoes sitting on bed",
  storeName: "Vinties",
  items: ["Nascar Tees", "Hype-Beast", "90s Vintage"]
},
{
  id: 6,
  src: z,
  alt: "Girl in tracksuit wearing glasses sitting on ledge looking down at camera",
  storeName: "NZ Vintage",
  items: ["Shoes", "Jackets", "Menswear"]

},
{
  id: 7,
  src: img7,
  alt: "Guy in blue, purple and orange jumper looking down at the ground",
  storeName: "The Portage Store",
  items: ["Tees", "Bric-a-brac", "Womenswear"]
},
{
  id: 8,
  src: img8,
  alt: "Guy looking down posing into camera",
  storeName:"The Amazing Store",
  items: ["Nascar Tees", "Hype-Beast", "90s Vintage"]
},
{
  id: 9,
  src: img9,
  alt: "Cute girl looking at camera in white singlet, blue jeans and black hangbag over shoulder",
  storeName: "Fashion Vintage",
  items: ["Tees", "Bric-a-brac", "Womenswear"]
},
{
  id: 10,
  src: img10,
  alt: "Guy in white denim jacket in front of parking sign with glasses on",
  storeName: "Running out of Ideas!",
  items: ["Shoes", "Jackets", "Menswear"]
},
{
  id: 11,
  src: b,
  alt: "Two girls posing in front of camera",
  storeName:"Pachichi",
  items: ["Nascar Tees", "Hype-Beast", "90s Vintage"]
},
{
  id: 12,
  src: c,
  alt: "Man crouching in front of upwards facing camera",
  storeName: "Boop scoop Vintage",
  items: ["Tees", "Bric-a-brac", "Womenswear"]
},
{
  id: 13,
  src: n,
  alt: "Lady in red dress and red scarf looking into camera",
  storeName: "xD Vinty Store",
  items: ["Shoes", "Jackets", "Menswear"]
},
{
  id: 14,
  src: v,
  alt: "Two girls posing like models",
  storeName: "Hello World!",
  items: ["Nascar Tees", "Hype-Beast", "90s Vintage"]
},
{
  id: 15,
  src: x,
  alt: "Girl looking into camera with orange fur coat over shoulder",
  storeName: "React Vintage",
  items: ["Tees", "Bric-a-brac", "Womenswear"]
},
{
  id: 16,
  src: img6,
  alt: "Guy holding bucket hat looking into camera",
  storeName: "The Best Store",
  items: ["Shoes", "Jackets", "Menswear"]
}


]

const flip = (
  <div className='imageGrid'>
    {images.map((image =>
      <Flippy

        flipOnHover={false}
        flipOnClick={true}
        flipDirection="horizontal"

        >
        <FrontSide
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <img className='gridImages' key={image.id} alt={image.alt} src={image.src}></img>
          <img className='flipIcon' src={arrow} alt="Flip Icon"></img>
        </FrontSide>
        <BackSide
          style={{
            display: 'flex',
            justifyContent: 'center',

          }}>
          <img className='backSideGridImage' alt={image.alt} src={image.src}></img>
          <div className='cardBack'>
            <div className="cardTop">
              <h3 className="storeName">{image.storeName}</h3>
            </div>
            <div className="cardBottom">
                <div className="storeProducts">
                  <span className="subHeader">Products</span>
                    <p className="storeItems">{image.items[0]}</p>
                    <p className="storeItems">{image.items[1]}</p>
                    <p className="storeItems">{image.items[2]}</p>
                </div>
                <div className="storeSocials">
                  <span className="subHeader">Visit</span>
                    <a href='https://www.instagram.com'><img src={insta} alt="Instagram Icon"></img></a>
                    <a href='https://www.facebook.com'><img src={facebook} alt="Facebook Icon"></img></a>
                    <a href='https://www.google.com'><img src={globe} alt="Globe Icon"></img></a>
                </div>
              </div>

          </div>


        </BackSide>
        </Flippy>
    ))}
  </div>


)



    return (
      flip

    )
}

export default ImageGrid
