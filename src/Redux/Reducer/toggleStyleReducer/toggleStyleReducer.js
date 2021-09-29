import { createSlice } from "@reduxjs/toolkit";

const toggleStyleReducer = createSlice({
  name: "toggle",
  initialState: {
    clipPath: "inset(0 50% 0 0)",
    backgroundColor: "dodgerblue",
  },
  reducers: {
    style(state, action) {
      if (action.payload) {
        return {
          clipPath: "inset(0 0 0 50%)",
          backgroundColor: "#D74046",
        };
      } else {
        return {
          clipPath: "inset(0 50% 0 0)",
          backgroundColor: "dodgerblue",
        };
      }
    },
  },
});

export const {style}=toggleStyleReducer.actions;
export default toggleStyleReducer.reducer;