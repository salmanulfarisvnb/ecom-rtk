import { configureStore } from "@reduxjs/toolkit"
import  prodcutReducer from "../redux/productSlice"
import  cartReducer from "../redux/cartSlice"




export const store = configureStore({
    reducer:{
        product:prodcutReducer,
        cart:cartReducer
    }
})