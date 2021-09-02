import { useEffect, useState } from "react";
import profile from "./profile.jpeg";

let hovers = Array.from(Array(144).keys()).map(function (a) {
  return { a: false };
});
function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        maxHeight: "100vh",
        height: "100vh",
        minWidth: "100vw",
        maxWidth: "100vw",
        width: "100vw",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {/* <img src={profile} alt="profile" className="profile" /> */}
      {Array.from(Array(144).keys()).map(function (a) {
        let r = Math.random();
        let c =
          r < 0.25
            ? "up"
            : r >= 0.25 && r < 0.5
            ? "down"
            : r >= 0.5 && r < 0.75
            ? "left"
            : "right";

        return (
          <div
            style={{
              position: "relative",
              width: window ? window.innerWidth / 12 : 100,
              height: window ? window.innerWidth / 12 : 100,
              backgroundColor: `hsl(${Math.floor(r * 36) * 10}, 70%, 80%)`,
              borderRadius: 300,
            }}
            className={`${c} circle`}
          ></div>
        );
      })}
    </div>
  );
}

export default App;
