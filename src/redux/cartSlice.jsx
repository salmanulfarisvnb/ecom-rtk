import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { products, quantity } = action.payload;
      const newIndex = state.cart.find((item) => item._id === products._id);
      if (newIndex) {
        newIndex.quantity++;
      } else {
        state.cart.push({
          _id: products._id,
          name: products.name,
          image: products.image,
          quantity: 1,
          price: products.price,
        });
      }
      //   ...............................
      state.quantity = state.cart.reduce((total, item) => {
        total += item.quantity;
        return total;
      }, 0);
      //   ............................
      state.totalPrice += products.price;
    },

    removeFromCart: (state, action) => {
      const newCart = state.cart.filter(
        (item) => item._id !== action.payload.id
      );
      if (newCart) {
        state.cart = newCart;
      }
      //   ..........................
      state.quantity = state.cart.reduce((total, item) => {
        total += item.quantity;
        return total;
      }, 0);
      //   ..........................
      state.totalPrice -= action.payload.price * action.payload.quantity;
    },

    // .....................................
    increaseCartQuantity: (state, action) => {
      const id = action.payload.id;
      const findItem = state.cart.find((item) => item._id === id);

      if (findItem) {
        findItem.quantity++;
        state.totalPrice += findItem.price;
        state.quantity++;
      }
    },

    // .............................

    decreaseCartQuantity: (state, action) => {
      const id = action.payload.id;
      const findItem = state.cart.find((item) => item._id === id);

      if (findItem) {
        findItem.quantity--;
        state.totalPrice -= findItem.price;
        state.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
