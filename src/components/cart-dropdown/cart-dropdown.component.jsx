import React from 'react';
import { connect } from 'react-redux'
import CustomButton from "../../components/Button/button.component"
import { selectCartItems } from "../../redux/cart/cart.selector"
import { withRouter } from "react-router-dom"
import './cart-dropdown.styles.scss'
import Item from '../cart-items/cart-items.component'
import { setHiddenStatus } from '../../redux/cart/cart.actions';
const CartDropdown=(props)=>{
    console.log(props)
    return(
    <div className='cart-dropdown'>
       <div className='cart-items'>
        {
           props.Items.length ?
           props.Items.map((e,index)=>(<Item key={index} name={e.name} price={e.price} imageUrl={e.imageUrl} quantity={e.quantity}></Item>)):
           <span className="empty-msg">Your Cart is Empty</span>
        }
       </div>
       
       <CustomButton onClick={()=> {
           props.history.push("/checkout");
           props.setHiddenStatus();
           }}>
           GO TO CHECKOUT</CustomButton>
    </div>
    )
}
const mapStatetoProps=(state)=>({
    Items: selectCartItems(state)
})
const mapDispatchtoProps=(dispatch)=>({
    setHiddenStatus: ()=>dispatch(setHiddenStatus())
})
export default withRouter(connect(mapStatetoProps,mapDispatchtoProps)(CartDropdown));