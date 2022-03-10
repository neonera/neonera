

import './MainPage.css'

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
        <h4 style={{padding: "30px"}}>Oops... this page is under construction...</h4>
      </div>
    </>
  );
}

export default MainPage;
