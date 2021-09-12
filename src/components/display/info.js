import { Grid, Typography } from "@material-ui/core";
import profile from "../../images/profile.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profile: {
    width: "100%",
    height: "100%",
    borderRadius: 1000,
    maxWidth: "200px",
    filter: "brightness(110%) saturate(110%)",
  },
}));

const Info = ({ language }) => {
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
        <Typography
          variant="h4"
          style={{ fontFamily: "'Roboto Slab', serif", fontWeight: "300" }}
        >
          {language === "en"
            ? "Hi! I'm Danyel, consultant / web developer / data scientist based in Tokyo."
            : "こんにちは！\n 京大出身・東京在住のコンサルタントです"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Info;
