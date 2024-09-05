import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const loadCartFromCookies = () => {
    const savedCart = Cookies.get('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToCookies = (cartItems) => {
    Cookies.set('cartItems', JSON.stringify(cartItems), { expires: 7 }); // expires is in days
};

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        cartItems: loadCartFromCookies()
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = {
                title: action.payload.title,
                price: action.payload.price,
                description: action.payload.description,
                image: action.payload.image,
                id: action.payload.id,
                star: action.payload.star,
                downloadLink: action.payload.downloadLink
            };
            state.cartItems.push(newItem);
            saveCartToCookies(state.cartItems);
        },
        removeCartItem: (state, action) => {
            state.cartItems.splice(action.payload.index, 1);
            saveCartToCookies(state.cartItems);
        }
    }
});

export const { addToCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
