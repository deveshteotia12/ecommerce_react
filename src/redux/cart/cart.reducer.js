import { bindActionCreators } from 'redux';
import { decreaseQuantity, increaseQuantity } from './cart.actions';
import  {CartActionTypes}  from './cart.types'
import  { addItemToCart,removeItemsFromCart,IncreaseQuantity,DecreaseQuantity} from './cart.utils'
const INTIAL_STATE={
    hidden: true,
    Items: []
}

const cartReducer=(state=INTIAL_STATE,action)=>
{

   /* if(action.type===CartActionTypes.HIDDEN_STATE)
    {
        return {...state,hidden: !state.hidden}
    }
    else if(action.type===CartActionTypes.ADD_ITEMS)
    {
       return {...state,Items: [...state.Items, action.payload]};
    }
    else
    { 
        return state;
    }*/
    switch(action.type){
        case CartActionTypes.HIDDEN_STATE:
            return{
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEMS:
            //state.Items.push.action.payload;
            return{
                ...state,
               Items: addItemToCart(state.Items,action.payload)
               //Items: [...state.Items, action.payload]
            }
        case CartActionTypes.REMOVE_ITEMS:
            return{
                ...state,
                Items: removeItemsFromCart(state.Items,action.payload)
            }
        case CartActionTypes.INCRE_QUAN:
            return{
                ...state,
                Items: IncreaseQuantity(state.Items,action.payload)
            }
        case CartActionTypes.DECRE_QUAN:
            return{
                ...state,
                Items: DecreaseQuantity(state.Items,action.payload)
            }
        default:
            return state;
    }
};
export default cartReducer;