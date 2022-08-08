import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: true,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      const { payload } = action;

      return {
        ...state,
        products: [...payload],
        isLoading: false,
      };
    },
    addProduct(state, action) {},
    updateProduct(state) {},
    removeProduct(state) {},
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
