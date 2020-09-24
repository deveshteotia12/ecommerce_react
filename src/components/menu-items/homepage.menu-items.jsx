import React from "react"

import "./homepage.menu-items.scss"
function MenuItems({item, imageURL, size})
{
    return(
        <div className= {`${size} menu-item`}>
        <div className="background-image"
            style={{
             backgroundImage: `url(${imageURL})`
          }}
        />
            <div className="content">
            <h1 className="title">{item}</h1>
            <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}
export default MenuItems;