import React from 'react'
import scrollIntoView from 'scroll-into-view-if-needed'
function DNav () {

const categoriesMen = [
  {
    id: "Sweatshirts",
    item: "Sweatshirts & Hoodies",
},
{
  id: "Jackets",
  item: "Jackets & Coats",
},
{
  id: "Shirts",
  item: "Shirts",
},
{
  id: "TShirt",
  item: "T-Shirts"
},
{
  id: "Jeans",
  item: "Jeans & Trousers",
},
{
  id: "Fleeces",
  item: "Fleeces"
},
{
  id: "Football",
  item: "Football & Sport Shirts",
},
{
  id: "Tracksuits",
  item: "Tracksuits",
},
{
  id: "Shorts",
  item: "Shorts"
},
{
  id: "Suits",
  item: "Suits & Blazers"
},
{
  id: "Hats",
  item: "Hats & Caps"
}

]

const categoriesWomen = [
  {
    id: "WCoats",
    item: "Coats & Jackets"
  },
  {
    id: "WDress",
    item: "Dresses",
  },
  {
    id: "WDungarees",
    item: "Dungarees",
  },
  {
    id: "WFleeces",
    item: "Fleeces"
  },
  {
    id: "WHoodies",
    item: "Hoodies & Sweatshirts",

  },
  {
    id: "WJeans",
    item: "Jeans & Pants"

  },
  {
    id: "WJumpers",
    item: "Jumpers"
  },
  {
    id:"WShirts",
    item: "Shirts & Blouses"
  },
  {
    id: "WShorts",
    item: "Shorts"
  },
  {
    id: "WSkirts",
    item: "Skirts",
  },
  {
    id: "WTops",
    item: "Tops"
  },
  {
    id: "WTracksuits",
    item: "Tracksuits"
  },
  {
    id: "WTshirt",
    item: "T-Shirts"
  }
]
const scroll = (id) => {
  const node = id
  const selector = document.querySelector('#' + node)

  scrollIntoView(selector, {
    scrollMode: 'if-needed',
    block: 'center',
    inline: 'start',
    behavior: 'smooth',
  })
}



    return (
        <div className="directoryNav">
            <div className="navTitle">
              <h2>Vintage Directory</h2>
            </div>
            <div className="navnav">
              <div className="quickLinks">
                <h3>Quick Links</h3>
                <div className="menQuickLinks">
                  <h3 className="quickLinkTitle">Mens</h3>
                  {categoriesMen.map((cat, i) =>

                  <span className="qLinks" onClick={() => scroll(cat.id)} key={i}>{cat.item}</span>

              )}
              </div>
              <div className="wQuickLinks">
                <h3 className="quickLinkTitle">Womens</h3>
                {categoriesWomen.map((cat, i) =>
                    <span className="qLinks" onClick={() => scroll(cat.id)} key={i}>{cat.item}</span>
                )}
              </div>

              </div>
            <div className="categoryMen">
              <h3 className="categoryHeader">Shop Men</h3>
              {categoriesMen.map((cat, i) =>
                <div className="menItems" key={i}>
                  <h4 id={cat.id} className="categoryTitle">{cat.item}</h4>
                  <ul>
                    <li>Testing</li>
                    <li>Example</li>
                  </ul>

                </div>
              )}
            </div>
            <div className="categoryWomen">
              <h3 className="categoryHeader">Shop Women</h3>
              {categoriesWomen.map((cat, i) =>
              <div className="womenItems" key={i}>
                <h4 id={cat.id} className="categoryTitle">{cat.item}</h4>
                <ul>
                  <li>Test</li>
                  <li>Testing</li>
                </ul>
              </div>
            )}
            </div>
            </div>
        </div>
    )
}

export default DNav
