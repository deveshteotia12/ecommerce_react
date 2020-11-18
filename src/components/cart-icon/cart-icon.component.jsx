import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg'
import { connect } from 'react-redux';
import { selectCartItemsCount } from "../../redux/cart/cart.selector"
import {setHiddenStatus} from '../../redux/cart/cart.actions'
import './cart-icon.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selector';
class CartIcon extends React.Component{
    render(){
    return(
    <div className='cart-icon' onClick={()=>this.props.setHiddenStatus()}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className='item-count'>{this.props.ItemsCount}</span>
    </div>
    )}
}
const mapDispatchToProps=(dispatch)=>({
    setHiddenStatus: ()=>dispatch(setHiddenStatus())
})
const mapStateToProps=(state)=>(
    {
        ItemsCount: selectCartItemsCount(state)
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);