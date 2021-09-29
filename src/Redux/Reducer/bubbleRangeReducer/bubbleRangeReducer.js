import { createSlice } from "@reduxjs/toolkit";

const bubbleRangeReducer = createSlice({
  name: "bubble",
  initialState: { left: "50%" },
  reducers: {
    bubbleStyle(state, action) {
      return {
        left: `calc(${action.payload}% + (${8 - action.payload * 0.15}px))`,
      };
    },
  },
});
export const { bubbleStyle } = bubbleRangeReducer.actions;
export default bubbleRangeReducer.reducer;
