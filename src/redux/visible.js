import { createSlice } from "@reduxjs/toolkit";

export const visibleSlice = createSlice({
  name: "visible",
  initialState: {
    value: "home",
  },
  reducers: {
    changeVisible: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeVisible } = visibleSlice.actions;

export default visibleSlice.reducer;
