import React from 'react';

import './checkout.styles.scss'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartItems,selectCartItemsTotal } from '../../redux/cart/cart.selector'

import CheckOutItems from '../../components/checkoutPage/checkoutPageItems.component'
const checkoutPage=({cartItems, total})=>{
    return(
       <div className="checkout-page">
         <div className="checkout-header">
           <div className="header-block">
              <span>Product</span>
           </div>
           <div className="header-block">
              <span>Description</span>
           </div>
           <div className="header-block">
              <span>Quantity</span>
           </div>
           <div className="header-block">
              <span>Price</span>
           </div>
           <div className="header-block">
              <span>Remove</span>
           </div>
         </div>
         {
           cartItems.map((e)=><CheckOutItems key={e.id} id={e.id} name={e.name} price={e.price} imageUrl={e.imageUrl} quantity={e.quantity} ></CheckOutItems>)
         }
         <div className="total">
            <span>Total: ${total}</span>
         </div>
       </div>
    )
}
const mapStatetoProps=createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})
export default connect(mapStatetoProps)(checkoutPage);