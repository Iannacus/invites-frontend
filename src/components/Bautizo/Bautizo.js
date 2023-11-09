import React from "react";
import Hero from "./sections/hero/Hero";
import SectionContainer from "./section-container/SectionContainer";
import Welcome from "./sections/welcome/Welcome";
import "./bautizo.css";
import Date from "./sections/date/Date";

function Bautizo() {
  return (
    <>
      <SectionContainer bgColor="#FFFBE7">
        <Hero />
      </SectionContainer>
      <SectionContainer bgColor="#FFFBE7">
        <Welcome name="Derly Maldonado Valencia" />
      </SectionContainer>
      <SectionContainer noBorder bgColor="#FFFBE7">
        <Date />
      </SectionContainer>
    </>
  );
}

export default Bautizo;
