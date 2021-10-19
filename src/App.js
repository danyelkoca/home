import { createTheme } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Navbar from "./components/navbar";
import MainDisplay from "./components/mainDisplay";
import WorksDisplay from "./components/worksDisplay";
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
  const visible = useSelector((state) => state.visible.value);

  return (
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
            <CSSTransition
              in={visible === "home"}
              timeout={200}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <MainDisplay />
              </div>
            </CSSTransition>
            <CSSTransition
              in={visible === "works"}
              timeout={200}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <WorksDisplay />
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
