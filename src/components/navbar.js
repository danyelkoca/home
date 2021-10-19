import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/theme";
import { changeLang } from "../redux/lang";

const useStyles = makeStyles((theme) => ({
  appbar: {
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "black",
  },
}));

const Navbar = () => {
  const nightTheme = useSelector((state) => state.theme.value);
  const lang = useSelector((state) => state.lang.value);

  const dispatch = useDispatch();

  const classes = useStyles();

  const [translateEl, setTranslateEl] = React.useState(null);

  const handleTranslateClick = (event) => {
    setTranslateEl(event.currentTarget);
  };

  const handleTranslateClose = () => {
    setTranslateEl(null);
  };

  const [mainEl, setMainEl] = React.useState(null);

  const handleMainClick = (event) => {
    setMainEl(event.currentTarget);
  };

  const handleMainClose = () => {
    setMainEl(null);
  };

  return (
    <AppBar
      position="relative"
      color="transparent"
      className={classes.appbar}
      style={{
        borderBottom: nightTheme
          ? `1px solid rgba(255,255,255,0.3)`
          : `1px solid rgba(0,0,0,0.1)`,
      }}
    >
      <Toolbar className={classes.toolbar}>
        <Link
          className={classes.title}
          to="/home"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography variant="h6">
            {lang === "en" ? "Danyel Koca" : "コジャ・ダニエル"}
          </Typography>
        </Link>

        <div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="nightMode"
            onClick={() => dispatch(changeTheme())}
          >
            {nightTheme ? <WbSunnyIcon /> : <ModeNightIcon />}
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="translate"
            aria-haspopup="true"
            onClick={handleTranslateClick}
            aria-controls="translate-menu"
          >
            <TranslateIcon />
          </IconButton>
          <Menu
            id="translate-menu"
            anchorEl={translateEl}
            keepMounted
            open={Boolean(translateEl)}
            onClose={handleTranslateClose}
          >
            <MenuItem
              disabled={lang === "en" ? true : false}
              onClick={function () {
                handleTranslateClose();
                dispatch(changeLang(lang == "en" ? "jp" : "en"));
              }}
            >
              {lang === "en" ? "English" : "英語"}
            </MenuItem>
            <MenuItem
              disabled={lang === "jp" ? true : false}
              onClick={function () {
                handleTranslateClose();
                dispatch(changeLang(lang == "en" ? "jp" : "en"));
              }}
            >
              {lang === "en" ? "Japanese" : "日本語"}
            </MenuItem>
          </Menu>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="main menu"
            aria-haspopup="true"
            onClick={handleMainClick}
            aria-controls="main-menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="main-menu"
            anchorEl={mainEl}
            keepMounted
            open={Boolean(mainEl)}
            onClose={handleMainClose}
          >
            <MenuItem onClick={handleMainClose}>
              <HashLink
                className={classes.title}
                to="/home#my-works"
                style={{ textDecoration: "none" }}
              >
                {lang === "en" ? "My Works" : "プロジェクトの事例"}
              </HashLink>
            </MenuItem>
            <MenuItem onClick={handleMainClose}>
              <HashLink
                className={classes.title}
                to="/home#blog"
                style={{ textDecoration: "none" }}
              >
                {lang === "en" ? "Blog" : "ブログ"}
              </HashLink>
            </MenuItem>
            <MenuItem onClick={handleMainClose}>
              <HashLink
                className={classes.title}
                to="/home#about"
                style={{ textDecoration: "none" }}
              >
                {lang === "en" ? "About" : "学・経歴"}
              </HashLink>
            </MenuItem>
            <MenuItem onClick={handleMainClose}>
              <HashLink
                className={classes.title}
                to="/home#contact"
                style={{ textDecoration: "none" }}
              >
                {lang === "en" ? "Contact" : "コンタクト"}
              </HashLink>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
