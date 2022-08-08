import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCart(state, action) {
      const { payload } = action;

      return {
        ...state,
        products: [...payload],
        isLoading: false,
      };
    },
    addToCart(state, action) {
      const { payload } = action;

      return {
        ...state,
        products: [...state.products, payload],
        isLoading: false,
      };
    },
    updateCart(state) {},
    removeCart(state) {
      return { ...initialState, isLoading: false };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
