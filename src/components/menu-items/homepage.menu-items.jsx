import React from "react"
import {withRouter} from 'react-router-dom';
import "./homepage.menu-items.scss"


function MenuItems({item, imageURL, size, linkUrl, history,match})
{
    
    return(
        <div className= {`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
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
export default withRouter(MenuItems);