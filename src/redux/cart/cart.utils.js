export const addItemToCart=(cartItems, cartItemToAdd)=>{
   const existingCartItem = cartItems.find(cartItem => cartItem.id===cartItemToAdd.id)

   if(existingCartItem)
   {
       return cartItems.map((cartItem)=>
            cartItem.id===cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity+1}
            : cartItem
       )
   }
   return [...cartItems,{...cartItemToAdd,quantity: 1}]

}

export const removeItemsFromCart=(cartItems, itemId)=>{
    return cartItems.filter((item)=> item.id!==itemId)
}


export const IncreaseQuantity=(cartItems,itemId)=>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id===itemId)
    return cartItems.map((cartItem)=>
    cartItem.id===itemId 
    ? {...cartItem, quantity: cartItem.quantity+1}
    : cartItem
  )
}

export const DecreaseQuantity=(cartItems,itemId)=>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id===itemId)
    if(existingCartItem.quantity===1)
    {
        return cartItems.filter((item)=> item.id!==itemId)
    }
    else{
    return cartItems.map((cartItem)=>
    cartItem.id===itemId 
    ? {...cartItem, quantity: cartItem.quantity-1}
    : cartItem
  )
 }
}