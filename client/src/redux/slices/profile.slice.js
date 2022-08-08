import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: null,
  lastName: null,
  country: null,
  city: null,
  street: null,
  zipCode: null,
  homeNumber: null,
  floor: null,
  apartment: null,
  isLoading: true,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    loadProfile(state, action) {
      const { payload } = action;

      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    },
    updateProfile(state, action) {
      const { payload } = action;

      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
