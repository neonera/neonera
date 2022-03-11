import { Link } from "react-router-dom";

import './MainPage.css';
import strawberry_screenshot from "./assets/images/strawberry/app_screenshot.png";
import { ReactComponent as Strawberry } from "./assets/images/strawberry_white.svg";

const products = [
  {
    name: "Strawberry",
    description: "The social app for the people you already know",
    colors: ["#ef6778", "#b43c4a"],
    color: "#ac3947",
    image: strawberry_screenshot,
    LogoComponent: Strawberry,
  },
]

function MainPage() {
  return (
    <>
      <div className="introDiv" style={{gap: "15px"}}>
        <h1 style={{fontSize: "46px", textAlign: "center"}}>Creating <span className="bluePurpleGradient">web products</span> for the people</h1>
        <div style={{display: "flex"}}>
          <p className="" style={{color: "#fffa", fontSize: "18px"}}>Scroll down to view our products</p>
          <p className="scrollDownSymbol" style={{display: "inline", marginLeft: "4px", fontSize: "18px"}}>↓</p>
        </div>
      </div>
      <div className="contentDiv">
        <div className="headerDiv">
          <h1>Where would you like to go?</h1>
        </div>
        <div className="productsDiv">
          {
            products.map((item) => {
              return (
                  <div key={item.name} className="product">
                    <img src={item.image} alt={item.name + " Image"} />
                    <div style={{marginLeft: "30px"}}>
                      <div className="productLogoName">
                        <item.LogoComponent className={item.name.toLowerCase() + "Logo"} />
                        <h1>{item.name}</h1>
                      </div>
                      <div className="productDescription">
                        <p>{item.description}</p>
                      </div>
                      <a className="primaryButton" href="https://strawberry.neonblacknetwork.com">Go</a>
                      <Link to="/strawberry" className="secondaryButton">Learn more</Link>
                    </div>
                  </div>
              )
            })
          }
        </div>
        <div className="keywordDiv">
          <h2>That's all for now...</h2>
        </div>
      </div>
    </>
  );
}

export default MainPage;
