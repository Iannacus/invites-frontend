import React from "react";

const Loader = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
