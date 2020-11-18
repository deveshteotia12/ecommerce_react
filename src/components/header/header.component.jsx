import React from 'react';
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import "./header.styles.scss"
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from "../../redux/user/user.selector"
import { selectHidden } from "../../redux/cart/cart.selector"
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo} from "../../Assets/crown.svg"
import  CartIcon  from '../cart-icon/cart-icon.component.jsx'
class Header extends React.Component{
    
    render(){
    return(
       <div className="header">
            <Link className="logo-container" to="/">
                  <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                 <span className="text">SHOP</span>
                </Link>
                <Link className="option" to="/shop">
                <span className="text">CONTACT</span>
                </Link>
                {
                    this.props.currentUser ?
                    <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/SignIn">SIGN IN</Link>
                }
                <CartIcon handelChange={this.handelChange}/>
            </div>
            {
                this.props.hidden ? null : <CartDropdown></CartDropdown>
            }
            
       </div>
    )
            }
}

const mapStatetoProps=(state)=>({
    currentUser: selectCurrentUser(state),
    hidden: selectHidden(state)
})

export default connect(mapStatetoProps)(Header);
