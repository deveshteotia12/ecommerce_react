import React from 'react';
import ShopContainer from '../../components/shopContainer/shopContainer'
import './ShopPage.styles.scss'
import Navbar from "../../Navbar/navbar"
const Shop=()=>{
   console.log("Hii")
    return(
       <div>
        <Navbar></Navbar>
       <div className="shopPage">
          <ShopContainer></ShopContainer>
       </div>
       </div>
    )
}

export default Shop;