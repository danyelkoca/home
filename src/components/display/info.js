import { Grid, Typography } from "@material-ui/core";
import profile from "../../images/profile.JPG";
import { makeStyles } from "@material-ui/core/styles";

/* offset-x | offset-y | blur-radius | spread-radius | color */

const useStyles = makeStyles((theme) => ({
  profile: {
    width: "100%",
    height: "100%",
    borderRadius: 1000,
    maxWidth: "200px",
    filter: "brightness(110%) saturate(120%)",
    boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.2)",
  },
}));

const Info = () => {
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
          Hi! I'm Danyel, consultant / web developer / data scientist based in
          Tokyo.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Info;
