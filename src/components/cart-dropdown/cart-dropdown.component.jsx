import React from 'react';
import { connect } from 'react-redux'
import CustomButton from "../../components/Button/button.component"
import { selectCartItems } from "../../redux/cart/cart.selector"
import './cart-dropdown.styles.scss'
import Item from '../cart-items/cart-items.component'
const CartDropdown=(props)=>{
    console.log(props)
    return(
    <div className='cart-dropdown'>
       <div className='cart-items'>
        {
           props.Items.map((e,index)=>(<Item key={index} name={e.name} price={e.price} imageUrl={e.imageUrl} quantity={e.quantity}></Item>))
        }
       </div>
       <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
    )
}
const mapStatetoProps=(state)=>({
    Items: selectCartItems(state)
})
export default connect(mapStatetoProps,null)(CartDropdown);