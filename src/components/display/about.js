import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import { Typography } from "@material-ui/core";
import SectionTitle from "./sectionTitle";
import profile from "../../images/profile.JPG";
import Item from "./about/item";
import slovenia from "../../images/about/slovenia.jpg";
import toefl from "../../images/about/toefl.jpg";
import sat from "../../images/about/sat.jpg";
import mext from "../../images/about/mext.jpg";
import kyotouniversity from "../../images/about/kyotouniversity.jpg";
import roots from "../../images/about/roots.jpg";
import internship from "../../images/about/internship.jpg";
import gomigo from "../../images/about/gomigo.jpg";
import its from "../../images/about/its.jpg";
import japanese from "../../images/about/japanese.jpg";
import mynexthouse from "../../images/about/mynexthouse.jpg";
import graduation from "../../images/about/graduation.jpg";
import zs from "../../images/about/zs.jpg";
import aimer from "../../images/about/aimer.jpg";
import od from "../../images/about/od.jpg";

const abouts = [
  {
    img: slovenia,
    text: "Exchange in Slovenia",
    date: "2014 Feb",
  },
  {
    img: toefl,
    text: "TOEFL: 105",
    date: "2015 Jan",
  },
  {
    img: sat,
    text: "SAT Subject Tests: Math-2, Chemistry, Physics Full Score (2400/ 2400)",
    date: "2015 Jun",
  },
  {
    img: mext,
    text: "MEXT (Japanese Ministry of Education, Culture, Sports, Science and Technology) Scholarship Awardee",
    date: "2016 Mar",
  },
  {
    img: kyotouniversity,
    text: "Kyoto University - Faculty of Engineering - Undergraduate School of Global Engineering Commencement",
    date: "2016 Apr",
  },
  {
    img: roots,
    text: "Roots: Winner of Kyoto Startup Summer School",
    date: "2018 Aug",
  },
  {
    img: internship,
    text: "Internship at Toyo Construction - Naruohama Research Center",
    date: "2018 Sep",
  },
  {
    img: gomigo,
    text: "Gomigo: Winner of Hult Prize Kyoto University",
    date: "2018 Nov",
  },
  {
    img: its,
    text: "Researcher at Intelligent Transport Systems Laboratory @ Kyoto University",
    date: "2019 Apr",
  },
  {
    img: japanese,
    text: "Japanese Language Proficiency Test (JLPT): Acquiring N1",
    date: "2019 Jul",
  },
  {
    img: mynexthouse,
    text: "My Next House: Winner of JPY 300K @ Osaka International Startup Competition",
    date: "2019 Nov",
  },
  {
    img: graduation,
    text: "Graduation from Kyoto University with GPA 3.75 out of 4",
    date: "2020 Mar",
  },
  {
    img: zs,
    text: "Decision Analytics Associate @ ZS Tokyo Office",
    date: "2020 Mar",
  },
  {
    img: aimer,
    text: "Launched: Aimer - Japan Healthcare Intelligence App",
    date: "2021 Aug",
  },
  {
    img: od,
    text: "Published: Origin-destination matrix estimation by deep learning using maps with New York case study",
    date: "2021 Sep",
  },
];

const About = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SectionTitle title="About" />
      <div
        style={{
          maxHeight: 500,
          overflow: "scroll",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Timeline align="alternate" style={{ margin: 0, padding: 0 }}>
          {abouts.reverse().map((a, index) => (
            <Item img={a.img} text={a.text} date={a.date} index={index + 1} />
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default About;
