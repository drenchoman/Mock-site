import React from 'react'
import Sidebar from '../Components/Sidebar'
import SideBarRight from '../Components/SideBarRight'
import ImageGrid from '../Components/ImageGrid'

function Grid() {
    return (
        <div className="exploreGrid">
          <Sidebar />


          <div className='gridMain'>
            <a id='explore'>Find your Vintage</a>
            <ImageGrid />
          </div>


          <SideBarRight />


        </div>
    )
}

export default Grid
