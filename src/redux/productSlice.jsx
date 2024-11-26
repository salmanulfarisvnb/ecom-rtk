import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  searchTerm: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    filterByFeature: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredProducts = state.products.filter((item) =>
        item.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setProducts, filterByFeature } = productSlice.actions;
export default productSlice.reducer;
