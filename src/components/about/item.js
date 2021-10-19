import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    // width: "100%",
    // height: "100%",
    // borderRadius: 1000,
    // maxWidth: "200px",
    // filter: "brightness(110%) saturate(110%)",
  },
  img: {
    borderRadius: 1000,
    width: 150,
    height: 150,
    maxWidth: 150,
    maxHeight: 150,
    minWidth: 150,
    minHeight: 150,
    objectFit: "cover",
  },
}));

const Item = ({ img, text, date, index }) => {
  const nightTheme = useSelector((state) => state.theme.value);

  const classes = useStyles();

  return (
    <TimelineItem
      style={{
        borderLeft:
          index % 2 == 0
            ? "10px solid transparent"
            : `10px solid hsla(${
                Math.floor(Math.random() * 36) * 10
              }, 70%, 80%, 1)`,

        borderRight:
          index % 2 == 0
            ? `10px solid hsla(${
                Math.floor(Math.random() * 36) * 10
              }, 70%, 80%, 1)`
            : "10px solid transparent",
        margin: "10px 0",
      }}
    >
      <TimelineOppositeContent>
        <img className={classes.img} src={img} alt={text} />
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography color={nightTheme ? "white" : "textSecondary"}>
          {date}
        </Typography>

        <Typography>{text}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default Item;
