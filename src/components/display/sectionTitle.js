import { Typography } from "@material-ui/core";

const SectionTitle = ({ title }) => {
  return (
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
        {title}
      </Typography>
    </div>
  );
};

export default SectionTitle;
