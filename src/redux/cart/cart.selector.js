import { analytics } from 'firebase';
import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems= createSelector(
    [selectCart],
    cart => cart.Items
)
export const selectHidden= createSelector(
    [selectCart],
    cart=> cart.hidden
)
export const selectCartItemsCount= createSelector(
    [selectCartItems],
    Items=> Items.reduce((accu,actu)=>accu + actu.quantity,0)
)

export const selectCartItemsTotal=createSelector(
    [selectCartItems],
    Items=> Items.reduce((accu,actu)=>accu+(actu.quantity*actu.price),0)
)
