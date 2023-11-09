import React from "react";
import "./hero.css";
import angel from "../../../../img/bautizo/angel.png";
import pila from "../../../../img/bautizo/pila-bautismo.png";
import corner from "../../../../img/bautizo/ornamet.png";
function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-angel">
        <div className="center-image">
          <img src={angel} />
        </div>
      </div>
      <div className="center-content">
        <p className="text semi-bold center bauptism g-shadow">
          Acompañanos a celebrar el
        </p>
        <h1 className="center ba-gold p-shadow">Bautizo</h1>
        <p className="text semi-bold center bauptism g-shadow">
          de nuestro hijo
        </p>
        <h2 className="center ba-gold p-shadow">Aziel Eduardo Rosas Ramos</h2>
      </div>
      <div className="hero-pila pa0">
        <div className="center-image">
          <img src={pila} />
        </div>
      </div>
      <div className="corner top left">
        <img src={corner} style={{ width: "100%" }} />
      </div>
      <div className="corner top right">
        <img
          src={corner}
          style={{ width: "100%", transform: "rotate(90deg)" }}
        />
      </div>
      <div className="corner bottom right">
        <img
          src={corner}
          style={{ width: "100%", transform: "rotate(180deg)" }}
        />
      </div>
      <div className="corner bottom left">
        <img
          src={corner}
          style={{ width: "100%", transform: "rotate(270deg)" }}
        />
      </div>
    </div>
  );
}

export default Hero;
