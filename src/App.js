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
import Disclaimer from "./components/display/disclaimer";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(70,130,180)",
    },
  },
});

function App() {
  const [language, setLanguage] = useState("en");

  function handleLanguageChange(lang) {
    setLanguage(lang);
  }
  return (
    <ThemeProvider theme={theme} className="noScroll">
      <div
        className="noScroll"
        style={{
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <div style={{ maxWidth: 1000, flexGrow: 1 }} className="noScroll">
          <Navbar language={language} onLanguageChange={handleLanguageChange} />
          <Info language={language} className="noScroll" />
          <Works language={language} />
          <Blog language={language} />
          <About language={language} />
          <Contact language={language} />
          <Disclaimer language={language} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
