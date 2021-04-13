import React, {useState} from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
function Card() {
const [toggle, setToggle]= useState(false)

const handleClickedCard = () => {
  setToggle(!toggle)
  console.log(toggle)
}

const flip = (
  <Flippy
    flipOnHover={false}
    flipOnClick={true}
    style={{
      width: '200px',
      height:'400px'}}
    flipDirection="horizontal"
    >
      <FrontSide>
        Hello
      </FrontSide>
      <BackSide>
        World
      </BackSide>

    </Flippy>
)

const backCard = (
  <div className='card' onClick={handleClickedCard}>
    <h1>
      World
    </h1>
  </div>
)
    return (
      flip
    )
}

export default Card
