import { Typography } from "@material-ui/core";

const Contact = () => {
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
          Contact
        </Typography>
      </div>
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <p>Facebook</p>
        <p>Linkedin</p>
        <p>Github</p>
      </div>
    </div>
  );
};

export default Contact;
