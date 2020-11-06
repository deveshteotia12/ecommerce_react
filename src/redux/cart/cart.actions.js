export const setHiddenStatus=()=>({
     type: 'HIDDEN_STATE',
})

export const addItems=(object)=>({
     type: 'ADD_ITEMS',
     payload: object
})