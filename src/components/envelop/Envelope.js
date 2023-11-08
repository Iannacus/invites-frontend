import React, { useState } from "react";
import "./envelope.css";

function Envelope() {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <div className="wrapper" onClick={() => setShow(true)}>
        <div className="lid one" />
        <div className="lid two" />
        <div className="envelope" />
        <div className={`letter ${show ? "animate" : ""}`}>
          <p>Hello ¡Welcome to my invitation!</p>
        </div>
      </div>
    </div>
  );
}

export default Envelope;
