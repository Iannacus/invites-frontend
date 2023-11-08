import React from "react";
import "./BackDropContainer.css";

function BackDropContainer({ img, children }) {
  return (
    <div
      className="backdrop-container"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="backdrop" />
      <div className="backdrop-children">{children}</div>
    </div>
  );
}

export default BackDropContainer;
