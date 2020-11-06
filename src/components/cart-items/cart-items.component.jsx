import React from 'react';
import './cart-items.styles.scss'
const Item=(props)=>{
    return(
        <div className="cartItem">
            <div className="productImage"
             style={{
              backgroundImage: `url(${props.imageUrl})`
             }}                  
            />
            <div className="productDetails">
              <p className="Name">{props.name}</p>
              <p className="Price">{props.quantity}*{props.price}</p>
            </div>
        </div>
    )
}

export default Item;