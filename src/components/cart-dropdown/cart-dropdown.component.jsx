import React from 'react';
import { connect } from 'react-redux'
import CustomButton from "../../components/Button/button.component"

import './cart-dropdown.styles.scss'

const CartDropdown=()=>{
    return(
    <div className='cart-dropdown'>
       <div className='cart-items'></div>
       <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>)
}

export default CartDropdown;