import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg'
import { connect } from 'react-redux';
import {setHiddenStatus} from '../../redux/cart/cart.actions'
import './cart-icon.styles.scss';
class CartIcon extends React.Component{
   
    handelChange=()=>{
       // console.log(this.props.Items)
       if(this.props.Items.length!==0)
       {
           console.log("HIII")
           var x=this.props.Items.length();
           return x;
       }
       return 0;
       
    }
    render(){
    return(
    <div className='cart-icon' onClick={()=>this.props.setHiddenStatus()}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className='item-count'>{this.props.Items.length}</span>
    </div>
    )}
}
const mapDispatchToProps=(dispatch)=>({
    setHiddenStatus: ()=>dispatch(setHiddenStatus())
})
const mapStateToProps=(state)=>({
    Items: state.cart.Items
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);