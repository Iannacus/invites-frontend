import React from "react";
import WelcomeOrnaments from "./components/WelcomeOrnaments";
import "./welcome.css";
function Welcome({ name }) {
  return (
    <>
      <WelcomeOrnaments>
        <div className="welcome-container">
          <h2 className="bauptism center g-shadow">Aziel Eduardo</h2>
          <p className="text center g-shadow">
            Que la luz divina de Dios brille en nuestros corazones hoy y
            siempre.
          </p>
          <h3 className="bauptism center g-shadow">
            <span style={{ fontSize: "28px", lineHeight: "3" }}>Gracias</span>{" "}
            <br /> {name}
          </h3>
          <p className="text center g-shadow">
            Por ser parte del bautizo de nuestro bebé
          </p>
        </div>
      </WelcomeOrnaments>
    </>
  );
}

export default Welcome;
