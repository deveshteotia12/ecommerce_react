import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg'
import { connect } from 'react-redux';
import {setHiddenStatus} from '../../redux/cart/cart.actions'
import './cart-icon.styles.scss';

const CartIcon = (props) => (
    <div className='cart-icon' onClick={()=>props.setHiddenStatus()}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className='item-count'>0</span>
    </div>
)
const mapDispatchToProps=(dispatch)=>({
    setHiddenStatus: ()=>dispatch(setHiddenStatus())
})

export default connect(null,mapDispatchToProps)(CartIcon);