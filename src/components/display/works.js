import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import health from "../../images/health.jpg";
import data from "../../images/data.jpg";
import web from "../../images/web.jpg";
import SectionTitle from "./sectionTitle";

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

const Works = ({ language }) => {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", flexDirection: "column" }} id="my-works">
      <SectionTitle
        language={language}
        title={{ en: "My Works", jp: "プロジェクトの事例" }}
      />
      <Grid container spacing={3} style={{ marginTop: 20, marginBottom: 20 }}>
        <Grid item xs="12" sm="4" className="work" component="a" href="#">
          <div>
            <img src={health} alt="Healthcare" />
            <Typography>{language === "en" ? "Healthcare" : "医療"}</Typography>
          </div>
        </Grid>
        <Grid item xs="12" sm="4" className="work" component="a" href="#">
          <div>
            <img src={data} alt="Data Science" />
            <Typography>
              {language === "en" ? "Data Science" : "データサイエンス"}
            </Typography>
          </div>
        </Grid>
        <Grid item xs="12" sm="4" className="work" component="a" href="#">
          <div>
            <img src={web} alt="Web Development" />
            <Typography>
              {language === "en" ? "Web Development" : "Web開発"}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Works;
