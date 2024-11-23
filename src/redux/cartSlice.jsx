import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    cart:[],
    quantity:0,
    totalPrice:0,
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const product = action.payload
            const newIndex = state.cart.find((item)=>item._id === product._id)
            if (newIndex) {
                newIndex.quantity ++
            }
            else {
                state.cart.push({_id : product._id,
                    name:product.name,
                    image:product.image,
                    quantity:1,
                    price:product.price
                })
            }
            state.quantity = state.cart.reduce((total,item)=>{
                total += item.quantity
                return total
            },0)
            state.totalPrice += product.price
        }
    }
})


export const {addToCart} = cartSlice.actions
export default cartSlice.reducer