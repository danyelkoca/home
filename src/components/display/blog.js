import { Grid, Typography } from "@material-ui/core";

const Blog = () => {
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
          Blog
        </Typography>
      </div>

      <Grid container spacing={3} style={{ marginTop: 20, marginBottom: 20 }}>
        <Grid item xs="12" sm="4" component="a" href="#">
          <div>
            <Typography>Blog 1</Typography>
          </div>
        </Grid>
        <Grid item xs="12" sm="4" component="a" href="#">
          <div>
            <Typography>Blog 2</Typography>
          </div>
        </Grid>
        <Grid item xs="12" sm="4" component="a" href="#">
          <div>
            <Typography>Blog 3</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Blog;
