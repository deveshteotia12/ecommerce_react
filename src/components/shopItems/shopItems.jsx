import React from "react"
import './shopItems.styles.scss'
import MiniItems from "./miniItems"
const ShopItems=(props)=>
{
  return(
    <div >
        <h1 style={{marginLeft: "65px"}}>{props.title}</h1>
        <div className='items'>
           {props.imageURLs.slice(0,4).map( (e) => (<MiniItems key={e.id} imageURL={e.imageUrl}></MiniItems>))}
       </div>
    </div>
)}
export default ShopItems;