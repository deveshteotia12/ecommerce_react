import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../Button/button.component'
import { removeItems, increaseQuantity, decreaseQuantity } from '../../redux/cart/cart.actions'
import './checkOutPage.styles.scss'
const CheckOutItems=(props)=>{
    return(
        <div className="checkoutItems">
            <div className="itemImage">
            <img alt="item" src={props.imageUrl}></img>               
            </div>
            <div className="product">
              <span>{props.name}</span>
            </div>
            <div className="product">
              <span><span className="indeButton" onClick={()=>props.decreaseQuantity(props.id)}>&#10094;</span>{props.quantity}<span className="indeButton" onClick={()=>props.increaseQuantity(props.id)}>&#10095;</span></span>
            </div>
            <div className="product">
               <span>{props.price}</span>
            </div>
            <div className="product">
                <span class="removeButton" onClick={()=>props.removeItems(props.id)}>&#10005;</span>
            </div>
        </div>
    )
}

const mapDispatchtoProps=(dispatch)=>({
     removeItems: (ID)=>dispatch(removeItems(ID)),
     increaseQuantity: (ID)=>dispatch(increaseQuantity(ID)),
     decreaseQuantity: (ID)=>dispatch(decreaseQuantity(ID))
})

export default connect(null,mapDispatchtoProps)(CheckOutItems);
