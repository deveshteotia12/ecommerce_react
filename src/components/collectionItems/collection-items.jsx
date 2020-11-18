import React from "react";
import { connect } from 'react-redux';
import "./collection-items.styles.scss"
import CustomButton from '../Button/button.component'
import { addItems } from '../../redux/cart/cart.actions'
class CollectionItem extends React.Component
{
  constructor(props)
  {
    super();
  }
   handelChange=()=>{
     //console.log("HIII")
     //console.log(this.props)
     this.props.addItems(this.props)
   }
  render()
  {
    return(
      <div className="collection-item">
        <div
          className="image"
          style={{
              backgroundImage: `url(${this.props.imageUrl})`
          }}/>
        <div className="collection-footer">
            <span className="name">{this.props.name}</span>
            <span className="price">{this.props.price}</span>
        </div>
        <CustomButton dispatchFunc={this.handelChange} inverted>Add to Cart</CustomButton>
      </div>
     )
  }
}

const mapDispatchToProps=(dispatch)=>({
    addItems: (object) => dispatch(addItems(object))
})
export default connect(null,mapDispatchToProps)(CollectionItem);