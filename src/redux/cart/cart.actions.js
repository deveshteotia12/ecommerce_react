export const setHiddenStatus=()=>({
     type: 'HIDDEN_STATE',
})

export const addItems=(object)=>({
     type: 'ADD_ITEMS',
     payload: object
})

export const removeItems=(ID)=>({
     type: 'REMOVE_ITEMS',
     payload: ID
})

export const increaseQuantity=(ID)=>({
     type: 'INCRE_QUAN',
     payload: ID
})

export const decreaseQuantity=(ID)=>({
     type: 'DECRE_QUAN',
     payload: ID
})
