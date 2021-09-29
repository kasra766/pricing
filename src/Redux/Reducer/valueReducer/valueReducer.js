import { createSlice } from "@reduxjs/toolkit";

const valueReducer = createSlice({
  name: "value",
  initialState: 250000,
  reducers: {
    readValue(state, action) {
      return action.payload;
    },
  },
});
export const { readValue } = valueReducer.actions;
export default valueReducer.reducer;
