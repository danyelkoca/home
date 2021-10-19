import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";
import langReducer from "./lang";
import workReducer from "./work";
import visibleReducer from "./visible";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
    work: workReducer,
    visible: visibleReducer,
  },
});
