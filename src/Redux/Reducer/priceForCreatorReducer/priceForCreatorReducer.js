import { createSlice } from "@reduxjs/toolkit";

const priceForCreatorReducer = createSlice({
  name: "price",
  initialState: 29,
  reducers: {
    creator(state, action) {
      const range = action.payload.readRange;
      const toggle = action.payload.readToggle;
      const price = toggle ? range / 1000 : range / 500;
      return price;
    },
  },
});

export const { creator } = priceForCreatorReducer.actions;
export default priceForCreatorReducer.reducer;
