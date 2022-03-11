// import { Link } from "react-router-dom";

import './StrawberryPage.css';
// import strawberry_screenshot from "./assets/images/strawberry/app_screenshot.png";
import { ReactComponent as Strawberry } from "./assets/images/strawberry_white.svg";

function StrawberryPage() {
  return (
    <>
      <div className="introDiv strawberryIntro" style={{gap: "20px"}}>
        <div className="productLogoName strawberryIntroInner" style={{display: "flex"}}>
          <Strawberry className="strawberryLogo" />
          <h1>Strawberry</h1>
        </div>
        <div style={{position: "absolute", width: "100px", height: "100px"}}></div>
        <p style={{fontSize: "20px", color: "#ddd"}}>The social app for the people you already know</p>
      </div>
      <div className="contentDiv">
        <div className="headerDiv">
          <h1>A refreshed UI</h1>
        </div>
        <div className="keywordDiv">
          <h1>Wanna check it out?</h1>
          <a className="primaryButton" href="https://strawberry.neonblacknetwork.com">Go</a>
        </div>
      </div>
    </>
  );
}

export default StrawberryPage;
