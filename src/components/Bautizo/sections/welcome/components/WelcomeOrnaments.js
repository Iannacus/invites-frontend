import React from "react";
import ornament from "../../../../../img/bautizo/horizontal-ornament.png";
import angel from "../../../../../img/bautizo/angel1.png";
import "./welcome-ornaments.css";

function WelcomeOrnaments({ children }) {
  return (
    <div className="positionOrnament">
      <div className="horizontal-ornament top">
        <div className="center-image">
          <img src={ornament} />
        </div>
      </div>
      <div className="horizontal-ornament bottom i-2">
        <div className="center-image">
          <img src={ornament} />
        </div>
      </div>
      <div className="horizontal-ornament bottom right-50 i-1">
        <div className="center-image">
          <img src={angel} className="img-shadow" style={{ height: "400px" }} />
        </div>
      </div>
      {children}
    </div>
  );
}

export default WelcomeOrnaments;
