import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import health from "../../images/health.jpg";
import data from "../../images/data.jpg";
import web from "../../images/web.jpg";

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

const Works = () => {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="section-title">
        <Typography
          variant="h5"
          component="span"
          style={{
            fontFamily: "'Roboto Slab', serif",
            fontWeight: "300",
            padding: "0px 40px",
            backgroundColor: "white",
            zIndex: 2,
          }}
        >
          My Works
        </Typography>
      </div>
      <Grid container spacing={3} style={{ marginTop: 20, marginBottom: 20 }}>
        <Grid item xs="12" sm="4" className="work" component="a" href="#">
          <div>
            <img src={health} alt="Healthcare" />
            <Typography>Healthcare</Typography>
          </div>
        </Grid>
        <Grid item xs="12" sm="4" className="work" component="a" href="#">
          <div>
            <img src={data} alt="Data Science" />
            <Typography>Data Science</Typography>
          </div>
        </Grid>
        <Grid item xs="12" sm="4" className="work" component="a" href="#">
          <div>
            <img src={web} alt="Web Development" />
            <Typography>Web Development</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Works;
