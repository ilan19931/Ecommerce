import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth.slice";
import uiReducer from "./slices/ui.slice";
import productReducer from "./slices/product.slice";
import cartReducer from "./slices/cart.slice";

import profileReducer from "./slices/profile.slice";

import categoriesReducer from "./slices/category.slice";

export default configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    product: productReducer,
    cart: cartReducer,
    profile: profileReducer,
    categories: categoriesReducer,
  },
});
