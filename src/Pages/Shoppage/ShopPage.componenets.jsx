import React from 'react';
import ShopContainer from '../../components/shopContainer/shopContainer'
import './ShopPage.styles.scss';
import SHOP_DATA from  "../../shop.data"
import "../../components/PreviewCollection/previewCollection.component"
import PreviewCollection from '../../components/PreviewCollection/previewCollection.component';
class ShopPage extends React.Component{
   constructor(props)
   {
      super();
      this.state={
         collection: SHOP_DATA
      }
   }
   render()
   {
      return(
         this.state.collection.map((items)=>(<PreviewCollection key={items.id} title={items.title} items={items.items}></PreviewCollection>))
      )
   }

}

export default ShopPage;