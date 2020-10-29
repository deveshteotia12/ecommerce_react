import  {CartActionTypes}  from './cart.types'
const INTIAL_STATE={
    hidden: false
}

const cartReducer=(state=INTIAL_STATE,action)=>{
    switch(action.type)
    {
        case CartActionTypes.HIDDEN_STATE:
            return{
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
};

export default cartReducer;