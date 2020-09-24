import React from "react";


function Content(props)
{
   return(
    <div class="miniBox">
     <p>ShopNow</p>
     <p>{props.item}</p>
    </div>
   )
}
export default Content;