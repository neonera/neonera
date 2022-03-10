import { Link } from "react-router-dom";

import "./OldPage.css";
import logo from "./assets/images/logo.svg"
import strawberry from "./assets/images/strawberry.svg"

const products = [
  {
    name: "Strawberry",
    description: "The in-development messaging app with a new UI experience",
    colors: ["#ef6778", "#b43c4a"],
    color: "#ff9aab",
    image: strawberry
  },
]

function OldPage() {
  return (
    <>
      <div className="introDiv">
        <img src={logo} alt="NE Logo" width={250} />
        <h1 className="neonEraHeader">NEON ERA</h1>
      </div>
      <div className="contentDiv">
        <div className="headerDiv">
          <h1>Where would you like to go?</h1>
        </div>
        <div className="productsDiv">
          {
            products.map((item) => {
              return (
                  <div key={item.name} className="productCard">
                    <img src={item.image} alt="Strawberry Logo" width={60} />
                    <h1>{item.name}</h1>
                    <div>
                      <p>{item.description}</p>
                    </div>
                    <a className="primaryButton" href="https://strawberry.neonblacknetwork.com">Go</a>
                    <Link to="/strawberry" className="secondaryButton">Learn more</Link>
                  </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default OldPage;
