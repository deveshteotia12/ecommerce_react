import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems= createSelector(
    [selectCart],
    cart=> cart.Items
)

export const selectCartItemsCount= createSelector(
    [selectCartItems],
    Items=> Items.reduce((accu,actu)=>accu + actu.quantity,0)
)