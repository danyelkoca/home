import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link, Typography } from "@material-ui/core";
import health from "../images/health.jpg";
import data from "../images/data.jpg";
import web from "../images/web.jpg";
import healthDark from "../images/healthDark.jpg";
import dataDark from "../images/dataDark.jpg";
import webDark from "../images/webDark.jpg";
import SectionTitle from "./sectionTitle";
import { useSelector, useDispatch } from "react-redux";
import { changeWork } from "../redux/work";
import { changeVisible } from "../redux/visible";

const useStyles = makeStyles((theme) => ({
  profile: {
    width: "100%",
    height: "100%",
    borderRadius: 1000,
    maxWidth: "200px",
    filter: "brightness(110%)",
    boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.2)",
  },
}));

const worksMap = {
  health: {
    en: "Healthcare",
    jp: "医療",
    img: { day: health, night: healthDark },
  },
  data: {
    en: "Data Science",
    jp: "データサイエンス",
    img: { day: data, night: dataDark },
  },
  web: {
    en: "Web Development",
    jp: "Web開発",
    img: { day: web, night: webDark },
  },
};

const Works = () => {
  const classes = useStyles();
  const nightTheme = useSelector((state) => state.theme.value);
  const lang = useSelector((state) => state.lang.value);

  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", flexDirection: "column" }} id="my-works">
      <SectionTitle title={{ en: "My Works", jp: "プロジェクトの事例" }} />
      <Grid container spacing={3} style={{ marginTop: 20, marginBottom: 20 }}>
        {Object.keys(worksMap).map((w) => {
          return (
            <Grid item xs="12" sm="4" className="work work-main">
              <Link
                href="#"
                className="workLink"
                onClick={() => {
                  dispatch(changeWork(w));
                  dispatch(changeVisible("works"));
                }}
              >
                <img
                  style={{
                    filter: nightTheme ? "grayscale(0.5)" : "grayscale(0)",
                  }}
                  src={nightTheme ? worksMap[w].img.night : worksMap[w].img.day}
                  alt={worksMap[w][lang]}
                />
                <Typography>{worksMap[w][lang]}</Typography>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Works;
