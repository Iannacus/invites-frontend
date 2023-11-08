import React from "react";
import "./hero.css";
import angel from "../../../../img/bautizo/angel.png";
import pila from "../../../../img/bautizo/pila-bautismo.png";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-angel">
        <img src={angel} />
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
    </div>
  );
}

export default Hero;
