import React from 'react';
import {withRouter, Link} from 'react-router-dom'
import "./header.styles.scss"
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo} from "../../Assets/crown.svg"
const Header=(props)=>{
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
                    props.state ?
                    <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/SignIn">SIGN IN</Link>
                }
            </div>
       </div>
    )
}
export default Header;
