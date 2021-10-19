import { Grid, Typography } from "@material-ui/core";
import profile from "../images/profile.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  profile: {
    width: "100%",
    height: "100%",
    borderRadius: 1000,
    maxWidth: "200px",
    filter: "brightness(110%) saturate(110%)",
  },
}));

const Info = () => {
  const lang = useSelector((state) => state.lang.value);

  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      style={{ display: "flex", padding: "40px 20px" }}
    >
      <Grid
        item
        xs={12}
        sm={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={profile} alt="profile" className={classes.profile} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" style={{ width: "100%" }}>
          {lang === "en"
            ? "Hi! I'm Danyel, an entrepreneur based in Tokyo"
            : "こんにちは！東京在住の事業家です"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Info;
