import React from "react";
import Hero from "./sections/hero/Hero";
import SectionContainer from "./section-container/SectionContainer";
import Welcome from "./sections/welcome/Welcome";
import "./bautizo.css";

function Bautizo() {
  return (
    <>
      <SectionContainer>
        <Hero />
      </SectionContainer>
      <SectionContainer>
        <Welcome />
      </SectionContainer>
    </>
  );
}

export default Bautizo;
