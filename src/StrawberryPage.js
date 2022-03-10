import * as React from "react"

import "./StrawberryPage.css"
import three_strawberry from "./assets/images/strawberry/three_strawberry.png"
import gradients from "./assets/images/strawberry/gradients.png"
import animations from "./assets/images/strawberry/animations.gif"
import darkmode from "./assets/images/strawberry/darkmode.png"

const uifeatures = [
  {
    name: "Gradients!",
    description: "Gradients, everywhere!",
    image: gradients
  },
  {
    name: "Animations!",
    description: "Look! It all moves!",
    image: animations
  },
  {
    name: "Dark mode!",
    description: "It's all dark! (no light mode!)",
    image: darkmode
  },
]

const featureListCreator = (list) => {
  let myFeatureList = [];
  list.forEach((item) => {
    myFeatureList.push(
        <div key={item.name} className="feature">
          <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
          <img src={item.image} alt={item.name + " image"} width={60} />
        </div>
    )
  })
  return myFeatureList
}

const StrawberryPage = () => {
  return (
    <>
      <title>Strawberry - Neon Black Network</title>
      <div className="introDiv" style={{flexDirection: "column", gap: 0, padding: "0 50% 0 20%", width: "30%", alignItems: "start"}}>
        <div style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0, zIndex: "-1"}}>
          <img src={three_strawberry} alt={"3d Strawberry"} className="threeStrawberry" />
        </div>
        <h1 style={{fontSize: "50px"}}>Strawberry</h1>
        <h2>The in-development messaging app with a new UI experience</h2>
        <div style={{marginTop: "10px", display: "flex", alignItems: "center"}}>
          <a className="primaryButton" href="https://strawberry.neonblacknetwork.com">Go</a>
          <p style={{color: "#fffa", marginLeft: "10px"}}>or scroll down</p>
          <p className="scrollDownSymbol">↓</p>
        </div>
      </div>
      <div className="contentDiv">
        <div className="headerDiv">
          <h1>A refreshed UI.</h1>
        </div>
        <div className="featuresDiv">
          { featureListCreator(uifeatures) }
        </div>
        <div className="checkItOutDiv">
          <h1>Wanna check it out?</h1>
          <a className="primaryButton" href="https://strawberry.neonblacknetwork.com">Go</a>
        </div>
      </div>
    </>
  )
}

export default StrawberryPage
