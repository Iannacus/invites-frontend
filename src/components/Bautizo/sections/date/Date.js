import React from "react";
import Contador from "../../../dateSection/Contador";
import espirituSanto from "../../../../img/bautizo/espiritu-santo.png";
import corner from "../../../../img/bautizo/ornamet.png";
import infinite from "../../../../img/bautizo/infinitebottom.png";
import "./date.css";

function Date() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "calc(100% - 40px)",
        }}
      >
        <div className="center-image">
          <div style={{ width: "120px" }}>
            <img src={espirituSanto} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", marginBottom: "50px" }}>
          <blockquote
            className="text g-shadow"
            style={{
              fontSize: "16px",
              margin: "30px",
              fontStyle: "italic",
            }}
          >
            Que Dios te de tanto amor como gotas de lluvia, tanta salud como
            arena en el desierto tantas bendiciones como estrellas en el cielo.{" "}
            <br />
            <cite title="Papa Francisco">
              <div
                style={{
                  marginTop: "10px",
                  textAlign: "right",
                  fontWeight: "600",
                }}
              >
                Papa Francisco
              </div>
            </cite>
            <div
              style={{ position: "absolute", top: 0, left: 0, width: "50px" }}
            >
              <img src={corner} style={{ width: "100%" }} />
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "50px",
                transform: "rotate(90deg)",
              }}
            >
              <img src={corner} style={{ width: "100%" }} />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "50px",
                transform: "rotate(180deg)",
              }}
            >
              <img src={corner} style={{ width: "100%" }} />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "50px",
                transform: "rotate(270deg)",
              }}
            >
              <img src={corner} style={{ width: "100%" }} />
            </div>
          </blockquote>
        </div>
        <h2 className="bauptism center g-shadow">18 de Noviembre</h2>
        <p className="text center g-shadow">Solo faltan</p>
        <Contador />
        <button className="confirmButton">Confirmar asistencia</button>
      </div>
    </>
  );
}

export default Date;
