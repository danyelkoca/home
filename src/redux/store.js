import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";
import langReducer from "./lang";
import workReducer from "./work";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
    work: workReducer,
  },
});
