import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;









// removeProduct: (state, action) => {
//     const index = state.products.findIndex(product => product.id === action.payload)
//     if (index !== -1) {
//         state.products.splice(index, 1)
//     }
// },
// updateProduct: (state, action) => {
//     const index = state.products.findIndex(product => product.id === action.payload.id)
//     if (index!== -1) {
//         state.products[index] = {...state.products[index], ...action.payload}
//     }
// },
