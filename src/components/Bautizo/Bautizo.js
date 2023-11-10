import React from "react";
import Hero from "./sections/hero/Hero";
import SectionContainer from "./section-container/SectionContainer";
import Welcome from "./sections/welcome/Welcome";
import "./bautizo.css";
import Date from "./sections/date/Date";
import PlaceSection from "./sections/places/PlaceSection";
import iglesia from "../../img/bautizo/iglesia.jpg";
import alberca from "../../img/bautizo/alberca.png";

function Bautizo() {
  return (
    <div>
      <SectionContainer bgColor="#FFFBE7">
        <Hero />
      </SectionContainer>
      <SectionContainer bgColor="#FFFBE7">
        <Welcome name="Derly Maldonado Valencia" />
      </SectionContainer>
      <SectionContainer noBorder bgColor="#FFFBE7">
        <Date />
      </SectionContainer>
      <SectionContainer bgColor="#FFFBE7">
        <PlaceSection
          heading="Misa"
          image={iglesia}
          name="Santuario Diocesano Mariano de Nuestra Señora del Carmen"
          address="Calle 31 s/n Col. centro. Frente al parque Ignacio Zaragoza"
          hour="12:00 pm"
          link="https://maps.app.goo.gl/mUfdAF5Kg5p7c2hg9"
          buttonStyles="confirmButton"
        />
      </SectionContainer>
      <SectionContainer bgColor="#FFFBE7">
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
      </SectionContainer>
    </div>
  );
}

export default Bautizo;
