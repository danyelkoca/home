import { Grid, Typography, Link, ButtonGroup, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import od from "../images/about/od.jpg";
import aimer from "../images/works/aimer.jpg";
import bert from "../images/works/bert.jpg";
import { changeWork } from "../redux/work";

let works = [
  {
    type: ["data"],
    link: "https://ieeexplore.ieee.org/document/9529275",
    img: od,
    title: {
      en: "Origin-destination matrix estimation by deep learning using maps with New York case study",
      jp: "地図データとディープラーニングを用いたOD交通量推定・NY実証実験",
    },
  },
  {
    type: ["web", "health"],
    link: "https://aimer-health-app.herokuapp.com/",
    img: aimer,
    title: {
      en: "Aimer: Healthcare Intelligence App",
      jp: "Aimer: 日本医療アプリ",
    },
  },
  {
    type: ["data"],
    link: {
      en: "https://towardsdatascience.com/japanese-multiclass-text-classification-with-97-accuracy-using-bert-11b1fdc7c27e",
      jp: "https://qiita.com/dannyk/items/bee0249af1f77bc416d8",
    },
    img: bert,
    title: {
      en: "Japanese multiclass text classification with 97% accuracy using BERT",
      jp: "BERTを用いてNHK番組のジャンルを97％の精度で予測しましょう",
    },
  },
];

const worksMap = {
  all: { en: "All", jp: "全部" },
  health: { en: "Healthcare", jp: "医療" },
  data: { en: "Data Science", jp: "データサイエンス" },
  web: { en: "Web Development", jp: "Web開発" },
};

const WorksDisplay = () => {
  const lang = useSelector((state) => state.lang.value);
  const work = useSelector((state) => state.work.value);
  const nightTheme = useSelector((state) => state.theme.value);

  const dispatch = useDispatch();

  return (
    <Grid
      container
      spacing={3}
      style={{
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      <Grid xs="12" item style={{ display: "flex", justifyContent: "center" }}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          {Object.keys(worksMap).map((w) => {
            return (
              <Button
                className={
                  nightTheme & (work === w)
                    ? "active-button-night"
                    : !nightTheme & (work === w)
                    ? "active-button-day"
                    : ""
                }
                onClick={() => dispatch(changeWork(w))}
                style={{
                  backgroundColor: nightTheme ? "#121212" : "white",
                  color: nightTheme ? "white" : "#121212",
                  borderColor: nightTheme ? "white" : "#121212",
                }}
              >
                {worksMap[w][lang]}
              </Button>
            );
          })}
        </ButtonGroup>
      </Grid>
      <Grid container item spacing={3}>
        {works
          .filter((w) => (work === "all") | w.type.includes(work))
          .map((w) => {
            return (
              <Grid className="work work-display" item xs="12" sm="4">
                <Link
                  className="workLink"
                  target="_blank"
                  rel="noopener"
                  href={w.link[lang] ? w.link[lang] : w.link}
                >
                  <img src={w.img} alt={w.title[lang]} />
                  <Typography>{w.title[lang]}</Typography>
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
};

export default WorksDisplay;
