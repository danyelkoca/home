import { Link, Typography } from "@material-ui/core";
import SectionTitle from "./sectionTitle";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";

const Contact = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SectionTitle title="Contact" />
      <div style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}>
        <Link
          href="https://www.linkedin.com/in/danyelkoca"
          style={{ margin: 10 }}
        >
          <IconButton aria-label="LinkedIn">
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link href="https://github.com/danyelkoca" style={{ margin: 10 }}>
          <IconButton aria-label="GitHub">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link
          href="https://www.facebook.com/danyelkoca/"
          style={{ margin: 10 }}
        >
          <IconButton aria-label="Facebook">
            <FacebookIcon fontSize="large" />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
