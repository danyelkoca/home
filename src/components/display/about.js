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
    text: { en: "Exchange in Slovenia", jp: "スロベニアで留学" },
    date: "2014 Feb",
  },
  {
    img: toefl,
    text: { en: "TOEFL: 105", jp: "yolo" },
    date: "2015 Jan",
  },
  {
    img: sat,
    text: {
      en: "SAT Subject Tests: Math-2, Chemistry, Physics Full Score (2400/ 2400)",
      jp: "SAT 数学・物理学・化学：満点獲得",
    },
    date: "2015 Jun",
  },
  {
    img: mext,
    text: {
      en: "MEXT (Japanese Ministry of Education, Culture, Sports, Science and Technology) Scholarship Awardee",
      jp: "文部科学省・奨学金受賞",
    },
    date: "2016 Mar",
  },
  {
    img: kyotouniversity,
    text: {
      en: "Kyoto University - Faculty of Engineering - Undergraduate School of Global Engineering Commencement",
      jp: "京都大学・工学部・土木工学科：入学",
    },
    date: "2016 Apr",
  },
  {
    img: roots,
    text: {
      en: "Roots: Winner of Kyoto Startup Summer School",
      jp: "Roots: Kyoto Startup Summer School・優勝",
    },
    date: "2018 Aug",
  },
  {
    img: internship,
    text: {
      en: "Internship at Toyo Construction - Naruohama Research Center",
      jp: "インターンシップ：東洋建設・鳴浜研究所",
    },
    date: "2018 Sep",
  },
  {
    img: gomigo,
    text: {
      en: "Gomigo: Winner of Hult Prize Kyoto University",
      jp: "Gomigo: Hult Prize・京都大学予選・優勝",
    },
    date: "2018 Nov",
  },
  {
    img: its,
    text: {
      en: "Researcher at Intelligent Transport Systems Laboratory @ Kyoto University",
      jp: "京都大学・交通情報工学研究室に入室",
    },
    date: "2019 Apr",
  },
  {
    img: japanese,
    text: {
      en: "Japanese Language Proficiency Test (JLPT): Acquiring N1",
      jp: "日本語能力試験・N1（上級）合格",
    },
    date: "2019 Jul",
  },
  {
    img: mynexthouse,
    text: {
      en: "My Next House: Winner of JPY 300K @ Osaka International Startup Competition",
      jp: "My Next House: 大阪国際Start-up競技で優勝・30万円受賞",
    },
    date: "2019 Nov",
  },
  {
    img: graduation,
    text: {
      en: "Graduation from Kyoto University with GPA 3.75 out of 4",
      jp: "京都大学工学部から卒業。成績：3.75 / 4",
    },
    date: "2020 Mar",
  },
  {
    img: zs,
    text: {
      en: "Decision Analytics Associate @ ZS Tokyo Office",
      jp: "ZSアソシエイツ東京オフィスにに入社",
    },
    date: "2020 Mar",
  },
  {
    img: aimer,
    text: {
      en: "Launched: Aimer - Japan Healthcare Intelligence App",
      jp: "Aimer: 日本医療アプリを発足",
    },
    date: "2021 Aug",
  },
  {
    img: od,
    text: {
      en: "Published: Origin-destination matrix estimation by deep learning using maps with New York case study",
      jp: "地図データとディープラーニングを用いたOD交通量推定・NY実証実験：IEEE工学学問雑誌での発行",
    },
    date: "2021 Sep",
  },
];

const About = ({ language }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }} id="about">
      <SectionTitle
        language={language}
        title={{ en: "About", jp: "私について" }}
      />
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
            <Item
              img={a.img}
              text={a.text[language]}
              date={a.date}
              index={index + 1}
            />
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default About;
