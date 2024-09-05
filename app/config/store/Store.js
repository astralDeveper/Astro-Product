import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../../Components/config/reducers/productSlice";
import cartSlice from "../../Components/config/reducers/cartSlice";
import successReducer from "@/app/Components/config/reducers/successSlice";


export const store = configureStore({
    reducer: {
        products: productSlice,
        cartItems: cartSlice,
        successSlice: successReducer,
    }
})