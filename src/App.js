import { createTheme } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import MainDisplay from "./components/mainDisplay";
import WorksDisplay from "./components/worksDisplay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(70,130,180)",
    },
  },
});

function App() {
  const nightTheme = useSelector((state) => state.theme.value);

  return (
    <Router>
      <ThemeProvider theme={theme} className="noScroll">
        <div
          className="noScroll"
          style={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
            backgroundColor: nightTheme ? "#121212" : "white",
            color: nightTheme ? "white" : "#121212",
          }}
        >
          <div
            style={{
              maxWidth: 1000,
              width: "100%",
              fexGrow: 1,
            }}
          >
            <Navbar />
            <div style={{ minHeight: "100vh", position: "relative" }}>
              <Route path="/works">
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={200}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <WorksDisplay />
                    </div>
                  </CSSTransition>
                )}
              </Route>
              <Route exact path="/home">
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={200}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <MainDisplay />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
