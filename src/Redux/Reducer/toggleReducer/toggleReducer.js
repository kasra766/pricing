import { createSlice } from "@reduxjs/toolkit";

const toggleReducer = createSlice({
  name: "toggle",
  initialState: false,
  reducers: {
    handleToggle(state, action) {
      return action.payload;
    },
  },
});

export const { handleToggle } = toggleReducer.actions;
export default toggleReducer.reducer;
