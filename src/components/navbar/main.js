import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  appbar: {
    boxShadow: "none",
    borderBottom: `1px solid rgba(0,0,0,0.1)`,
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

const Navbar = ({ onLanguageChange, language }) => {
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
    <AppBar position="sticky" color="white" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Link
          variant="h6"
          className={classes.title}
          href="#"
          style={{ textDecoration: "none" }}
        >
          {language === "en" ? "Danyel Koca" : "コジャ・ダニエル"}
        </Link>
        <div>
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
              disabled={language === "en" ? true : false}
              onClick={function () {
                handleTranslateClose();
                onLanguageChange("en");
              }}
            >
              {language === "en" ? "English" : "英語"}
            </MenuItem>
            <MenuItem
              disabled={language === "jp" ? true : false}
              onClick={function () {
                handleTranslateClose();
                onLanguageChange("jp");
              }}
            >
              {language === "en" ? "Japanese" : "日本語"}
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
            <MenuItem component="a" href="#my-works" onClick={handleMainClose}>
              {language === "en" ? "My Works" : "プロジェクトの事例"}
            </MenuItem>
            <MenuItem component="a" href="#blog" onClick={handleMainClose}>
              {language === "en" ? "Blog" : "ブログ"}
            </MenuItem>
            <MenuItem component="a" href="#about" onClick={handleMainClose}>
              {language === "en" ? "About" : "学・経歴"}
            </MenuItem>
            <MenuItem component="a" href="#contact" onClick={handleMainClose}>
              {language === "en" ? "Contact" : "コンタクト"}
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
