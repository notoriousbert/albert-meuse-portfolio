import "./intro.scss";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Developer", "Engineer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/campMuir.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Albert Meuse</h1>
          <h3>
            Software <span ref={textRef}>Engineer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <ExpandMoreSharpIcon className="icon" />
        </a>
      </div>
    </div>
  );
}
