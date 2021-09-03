import { createTheme } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/main";
import "@fontsource/roboto";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(70,130,180)",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
