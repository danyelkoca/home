import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: true,
  },
  reducers: {
    changeTheme: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
