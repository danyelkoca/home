import Info from "./info";
import Works from "./works";
import Blog from "./blog";
import About from "./about";
import Contact from "./contact";

const MainDisplay = () => {
  return (
    <div className="noScroll">
      <Info className="noScroll" />
      <Works />
      <Blog />
      <About />
      <Contact />
    </div>
  );
};

export default MainDisplay;
