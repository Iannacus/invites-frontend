import React from "react";
import HeroAndreti from "../components/AndretiComponents/HeroAndreti";
import Presentation from "../components/AndretiComponents/Presentation";
import ReceptionAndreti from "../components/AndretiComponents/ReceptionAndreti";
import SectionDate from "../components/AndretiComponents/SectionDate";

const BautizoAndreti = ({firstname, lastname}) => {
  return(
    <>
      <HeroAndreti />
      <Presentation />
      <SectionDate 
        firstname={firstname}
        lastname={lastname}
      />
      <ReceptionAndreti />
    </>
  )
}

export default BautizoAndreti;