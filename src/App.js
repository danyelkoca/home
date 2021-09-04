import { createTheme } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/main";
import "@fontsource/roboto";
import Info from "./components/display/info";
import Works from "./components/display/works";
import Blog from "./components/display/blog";
import About from "./components/display/about";
import Contact from "./components/display/contact";

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
      <div style={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
        <div style={{ maxWidth: 1000, flexGrow: 1 }}>
          <Navbar />
          <Info />
          <Works />
          <Blog />
          <About />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
