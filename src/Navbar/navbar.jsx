import React from 'react'
import { withRouter} from 'react-router-dom'
import "./Navbar.styles.scss"
const Navbar= (props)=>{
   return(
        <div className="Nav">
            <h1>Shopify</h1> 
            <div className="Links">
               <button onClick={()=>props.history.push("/")}>Home</button>
                <button onClick={()=>props.history.push("/Shop")}>Store</button>
                <button onClick={()=>props.history.push("/Shop")}>Cart</button>
            </div>
        </div>
    )
 }

 export default withRouter(Navbar);