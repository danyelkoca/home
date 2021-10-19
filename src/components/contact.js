import { Link, Typography } from "@material-ui/core";
import SectionTitle from "./sectionTitle";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import { useSelector } from "react-redux";

const Contact = () => {
  const nightTheme = useSelector((state) => state.theme.value);
  const lang = useSelector((state) => state.lang.value);

  return (
    <div style={{ display: "flex", flexDirection: "column" }} id="contact">
      <SectionTitle lang={lang} title={{ en: "Contact", jp: "コンタクト" }} />
      <div style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}>
        <Link
          href="https://www.linkedin.com/in/danyelkoca"
          style={{ margin: 10 }}
        >
          <IconButton aria-label="LinkedIn">
            <LinkedInIcon
              fontSize="large"
              style={{ color: nightTheme ? "white" : "" }}
            />
          </IconButton>
        </Link>
        <Link href="https://github.com/danyelkoca" style={{ margin: 10 }}>
          <IconButton aria-label="GitHub">
            <GitHubIcon
              fontSize="large"
              style={{ color: nightTheme ? "white" : "" }}
            />
          </IconButton>
        </Link>
        <Link
          href="https://www.facebook.com/danyelkoca/"
          style={{ margin: 10 }}
        >
          <IconButton aria-label="Facebook">
            <FacebookIcon
              fontSize="large"
              style={{ color: nightTheme ? "white" : "" }}
            />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
