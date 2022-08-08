import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    loadCategories(state, action) {
      const { payload } = action;

      return [...payload];
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
