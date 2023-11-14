import React from "react";
import Hero from "./sections/hero/Hero";
import SectionContainer from "./section-container/SectionContainer";
import Welcome from "./sections/welcome/Welcome";
import "./bautizo.css";
import Date from "./sections/date/Date";
import PlaceSection from "./sections/places/PlaceSection";
import iglesia from "../../img/bautizo/iglesia.jpg";
import alberca from "../../img/bautizo/alberca.png";
import sectionBg from "../../img/bautizo/byebg.jpeg";
import angel from "../../img/bautizo/angel3.png";
import tOrnament from "../../img/bautizo/top-ornament.png";
import Page from "../Page";
import BottomNavigation from "../bottom-navigation/BottomNavigation";

function Bautizo({
  firstname,
  lastname,
  confirmation,
  id,
  loading,
  setSpiner,
  setRefetch,
}) {
  return (
    <Page
      title={`Invitación ${firstname}`}
      description={`Hola ${firstname} nos complace invitarte al bautizo de nuestro hijo: Aziel Eduardo`}
    >
      <SectionContainer bgColor="#FFFBE7">
        <Hero />
      </SectionContainer>
      <SectionContainer bgColor="#FFFBE7">
        <Welcome name={`${firstname} ${lastname}`} />
      </SectionContainer>
      <SectionContainer noBorder bgColor="#FFFBE7">
        <Date
          guestId={id}
          confirmation={confirmation}
          loading={loading}
          setSpiner={setSpiner}
          setRefetch={setRefetch}
        />
      </SectionContainer>
      <SectionContainer bgColor="#FFFBE7">
        <PlaceSection
          heading="Misa"
          image={iglesia}
          name="Santuario Diocesano Mariano de Nuestra Señora del Carmen"
          address="Calle 31 s/n Col. centro. Frente al parque Ignacio Zaragoza"
          hour="09:30 am"
          link="https://maps.app.goo.gl/mUfdAF5Kg5p7c2hg9"
          buttonStyles="confirmButton"
        />
      </SectionContainer>
      {/* <SectionContainer bgColor="#FFFBE7">
        <PlaceSection
          heading="Recepción"
          image={alberca}
          name="Lexios Alberca"
          address="Cerrada Amapola, Col. Sna Nicolás #144, pasando colegio Continental"
          hour="02:00 pm"
          link="https://maps.app.goo.gl/DL4QU6b7cVz4pQx2A"
          buttonStyles="confirmButton"
          inverted
        />
      </SectionContainer> */}
      <SectionContainer withBgImage img={sectionBg}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(255, 251, 231, 0.5)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
          }}
        >
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
            <div style={{ padding: "0 20px" }}>
              <blockquote
                style={{
                  marginInline: "20px",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                Un día que todos acudian a Juan para que los bautizara, Jesús
                fue bautizado también. Y mientras oraba, se abrió el cielo, y el
                Espirítu Santo bajó sobre Él en forma de paloma. Entonces se oyó
                una voz en el cielo que decía: &nbsp; &#171;
                <i>Tú eres mi hijo amado; estoy muy complacido contigo</i>.
                &#187;
              </blockquote>
              <p style={{ textAlign: "right", paddingRight: "20px" }}>
                Lucas 3:21-22
              </p>
            </div>
            <h2 className="bauptism g-shadow">Te esperamos</h2>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: "50%",
            margin: "auto",
            width: "350px",
            transform: "translate(-50%)",
          }}
        >
          <img
            src={tOrnament}
            style={{
              width: "100%",
              marginTop: "20px",
              filter: "drop-shadow(1px 1px 1px rgba(64, 51, 32, 0.7) )",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            bottom: 0,
            left: "50%",
            margin: "auto",
            width: "200px",
            transform: "translate(-50%)",
          }}
        >
          <img src={angel} style={{ width: "100%" }} />
        </div>
      </SectionContainer>
    </Page>
  );
}

export default Bautizo;
