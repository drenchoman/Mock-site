import React, {useState} from 'react'
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

function ImageGrid(props) {

const [toggle, setToggle]= useState(false);


const handleClickedCard = () => {
  setToggle(!toggle)
  console.log(toggle)

}

const images = [{
  id: 1,
  src: img1,
  alt: "Girl in blue shirt and white ripped jeans",
  storeName: "Home Vintage",
  items: "Shoes"
},
{
  id: 2,
  src: img2,
  alt: "Girl in red jacket standing in wheat field",
  storeName: "Platypus",
  items: "Shoes"
},
{
  id: 3,
  src: img3,
  alt: "Girl sitting on top of pool diving board with a fan of cash",
  storeName: "Rebel Sport",
  items: "Shoes"
},
{
  id: 4,
  src: img4,
  alt: "Girl posing in room with green jumper on",
  storeName: "Stirling",
  items: "Shoes"
},
{
  id: 5,
  src: img5,
  alt: "Guy in yellow top, pale blue jeans and nike shoes sitting on bed",
  storeName: "Vinties",
  items: "Shoes"
},
{
  id: 6,
  src: z,
  alt: "Girl in tracksuit wearing glasses sitting on ledge looking down at camera",
  storeName: "NZ Vintage",
  items: "Shoes"

},
{
  id: 7,
  src: img7,
  alt: "Guy in blue, purple and orange jumper looking down at the ground",
  storeName: "The Portage Store",
  items: "Shoes"
},
{
  id: 8,
  src: img8,
  alt: "Guy looking down posing into camera",
  storeName:"The Amazing Store",
  items: "Shoes"
},
{
  id: 9,
  src: img9,
  alt: "Cute girl looking at camera in white singlet, blue jeans and black hangbag over shoulder",
  storeName: "Fashion Vintage",
  items: "Shoes"
},
{
  id: 10,
  src: img10,
  alt: "Guy in white denim jacket in front of parking sign with glasses on",
  storeName: "Running out of Ideas!",
  items: "Shoes"
},
{
  id: 11,
  src: b,
  alt: "Two girls posing in front of camera",
  storeName:"Pachichi",
  items: "Shoes"
},
{
  id: 12,
  src: c,
  alt: "Man crouching in front of upwards facing camera",
  storeName: "Boop scoop Vintage",
  items: "Shoes"
},
{
  id: 13,
  src: n,
  alt: "Lady in red dress and red scarf looking into camera",
  storeName: "xD Vinty Store",
  items: "Shoes"
},
{
  id: 14,
  src: v,
  alt: "Two girls posing like models",
  storeName: "Hello World!",
  items: "Shoes"
},
{
  id: 15,
  src: x,
  alt: "Girl looking into camera with orange fur coat over shoulder",
  storeName: "React Vintage",
  items: "Tees"
},
{
  id: 16,
  src: img6,
  alt: "Guy holding bucket hat looking into camera",
  storeName: "The best store",
  items: "Shoes"
}


]

const flip = (
  <div className='imageGrid'>
    {images.map((image =>
      <Flippy
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
        flipOnHover={false}
        flipOnClick={true}
        flipDirection="horizontal"
        >
        <FrontSide>
          <img className='gridImages' key={image.id} alt={image.alt} src={image.src}></img>
        </FrontSide>
        <BackSide>
          <img className='backSideGridImage' alt={image.alt} src={image.src}></img>
          <div className='imageBio'>
            <div className="storeInfo">
              <h3>{image.storeName}</h3>
              <h4>{image.items}</h4>
            </div>

            <div className='imageSocials'>
              <a href={'https://www.google.com'}>Website</a>
            </div>

          </div>
        </BackSide>
        </Flippy>
    ))}
  </div>


)

// const frontSide = (
//   <div className='imageGrid'>
//     {images.map((image =>
//       <div className='imageContainer'>
//         <img onClick={handleClickedCard} className='gridImages' key={image.id} alt={image.alt} src={image.src}></img>
//       </div>
//     ))}
//   </div>
//
// )
//
// const backSide = (
//   <div className='imageGrid'>
//     {images.map((image =>
//     <div className='imageContainer'>
//       <img onClick={handleClickedCard} className='gridImages' key={image.id} alt={image.alt} src={image.src}></img>
//         <h3>Hello World</h3>
//     </div>))}
//
//   </div>
//
// )


    return (
      flip
        // <div className="imageGrid">
        //   {images.map((image =>
        //   <div className="imageContainer">
        //     <img className="gridImages" key={image.id} alt={image.alt} src={image.src}></img>
        //   </div>
        // ))}
        // </div>
    )
}

export default ImageGrid
