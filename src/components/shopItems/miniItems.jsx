import React from 'react';

import './miniitems.styles.scss'
const MiniItems=(props)=>{

    return(
    <div>
        <div className="items1">
          <div className="background-Image"
            style={{
              backgroundImage: `url(${props.imageURL})`
            }}
          >
          </div>
          <div className="text">
            <h3>Add To Cart</h3>
          </div>
        </div> 
    </div>
    )
}

export default MiniItems;