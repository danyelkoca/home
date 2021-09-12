import { Grid, Typography } from "@material-ui/core";
import SectionTitle from "./sectionTitle";

const Blog = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SectionTitle title="Blog" />
      <div style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
        There is nothing to show yet.
      </div>
      {/* <Grid container spacing={3} style={{ marginTop: 20, marginBottom: 20 }}>
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
      </Grid> */}
    </div>
  );
};

export default Blog;
