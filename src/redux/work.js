import { createSlice } from "@reduxjs/toolkit";

export const workSlice = createSlice({
  name: "work",
  initialState: {
    value: "all",
  },
  reducers: {
    changeWork: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeWork } = workSlice.actions;

export default workSlice.reducer;
