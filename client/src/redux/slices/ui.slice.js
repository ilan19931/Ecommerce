import { createSlice } from "@reduxjs/toolkit";

const initState = {
  alerts: [],
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initState,
  reducers: {
    addAlert: (state, action) => {
      const { payload } = action;

      return {
        alerts: [...state.alerts, payload],
      };
    },
    removeAlert: (state, action) => {
      const { payload } = action;

      return {
        alerts: [...state.alerts.filter((alert) => alert._id !== payload)],
      };
    },
    error: (state, action) => {
      const { payload } = action;

      return {
        ...state,
        errors: payload,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
