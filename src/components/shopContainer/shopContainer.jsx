import React from "react"

import ShopItems from '../shopItems/shopItems'
import './shopContainer.styles.scss'
import SHOP_DATA from '../../shop.data'
class ShopContainer extends React.Component{
  constructor()
  {
    super();
    this.state={
        itemArray: SHOP_DATA
    }
  }
  render()
  {
    return(
    <div className="shopContainer">
       {this.state.itemArray.map((Objects)=>(<ShopItems title={Objects.title} key={Objects.id}  imageURLs={Objects.items}></ShopItems>))}
    </div>
    )
  }
} 
export default ShopContainer;