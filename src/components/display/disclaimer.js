import SectionTitle from "./sectionTitle";

const Disclaimer = ({ language }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }} id="disclaimer">
      <SectionTitle
        language={language}
        title={{ en: "Disclaimer", jp: "注釈" }}
      />
      <div style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
        {language === "en"
          ? "All rights are NOT reserved. Feel free to use stuff on this website in your projects"
          : "本サイトの写真・デザインコンセプトなどを使うためには許可は不要です"}
      </div>
    </div>
  );
};

export default Disclaimer;
