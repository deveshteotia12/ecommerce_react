import React from 'react';

import './preview.collection.styles.scss'
import CollectionItem from "../collectionItems/collection-items"
const PreviewCollection = ({title, items, id})=>(
<div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
          {
              //On the place of filter we can also use slice to get 4 elements
             items.filter((items,idx) => idx<4).map(({id, ...otherItemProps})=>(<CollectionItem key={id} id={id} {...otherItemProps}></CollectionItem>))
          }
    </div>
</div>
)

export default PreviewCollection;