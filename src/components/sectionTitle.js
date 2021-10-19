import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const SectionTitle = ({ title }) => {
  const nightTheme = useSelector((state) => state.theme.value);
  const lang = useSelector((state) => state.lang.value);

  return (
    <div
      className={
        nightTheme ? "section-title section-title-dark" : "section-title"
      }
    >
      <Typography
        variant="h5"
        component="span"
        style={{
          fontFamily: "'Roboto Slab', serif",
          fontWeight: "300",
          padding: "0px 40px",
          backgroundColor: nightTheme ? "#121212" : "white",
          zIndex: 2,
        }}
      >
        {title[lang]}
      </Typography>
    </div>
  );
};

export default SectionTitle;
