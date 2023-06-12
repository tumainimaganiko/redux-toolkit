import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from '../../cartItems';

const url = 'https://course-api.com/react-useReducer-cart-project';
const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', _ => {
    return fetch(url).then(resp => resp.json()).catch(err => console.log(err))
})
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
    },
    extraReducers : {
        [getCartItems.pending] : state => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled] : (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected] : state => {
            state.isLoading = false;
        },
    }
})
// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;