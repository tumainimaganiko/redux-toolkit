import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems';

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: store => {
            store.cartItems = [];
        },
        removeItem: (store,action) => {
            const itemId = action.payload;
            store.cartItems = store.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (store, { payload }) => {
            const cartItem = store.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
            console.log(payload)
        },
        decrease: (store, { payload }) => {
            const cartItem = store.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach( item => {
                amount += item.amount;
                total += item.amount * item.price;
            })
            state.amount = amount;
            state.total = total;
        }
    }
})
// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;