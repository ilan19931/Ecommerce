import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: null,
  isLoading: true,
};

const productSlice = createSlice({
  name: "products",
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
    getProduct(state, action) {
      const { payload } = action;

      return {
        ...state,
        product: payload,
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
