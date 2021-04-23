import React from 'react'
import ImageGrid from '../Components/ImageGrid'

function Grid() {
    return (
        <section className="exploreGrid">
          <div className='gridContainer'>
            <h2 className="exploreTitle">Find your Vintage</h2>
            <h3 className="exploreSubTitle">Tap on image to flip</h3>
            <ImageGrid />
          </div>
        </section>
    )
}

export default Grid
