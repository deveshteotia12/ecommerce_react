import React from "react";

import "./collection-items.styles.scss"
import CustomButton from '../Button/button.component'
const CollectionItem = ({id , name , price , imageUrl})=>(
    <div className="collection-item">
       <div
         className="image"
         style={{
             backgroundImage: `url(${imageUrl})`
         }}
       />
       <CustomButton>Add to Cart</CustomButton>
       <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
       </div>
    </div>
);

export default CollectionItem;