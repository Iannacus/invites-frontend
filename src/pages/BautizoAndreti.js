import React from "react";
import HeroAndreti from "../components/AndretiComponents/HeroAndreti";
import Presentation from "../components/AndretiComponents/Presentation";
import ReceptionAndreti from "../components/AndretiComponents/ReceptionAndreti";
import SectionDate from "../components/AndretiComponents/SectionDate";
import ByeSection from "../components/byeSection/ByeSection";

const BautizoAndreti = ({firstname, lastname, confirmation, id, loading, setSpiner }) => {
  return(
    <>
      <HeroAndreti />
      <Presentation />
      <SectionDate 
        firstname={firstname}
        lastname={lastname}
        confirmation={confirmation}
        guestId={id}
        loading={loading}
        setSpiner={setSpiner}
      />
      <ReceptionAndreti />
      <ByeSection 
        text1='¡Esperamos contar con tu asistencia!'
        name='Andretti Seerberger'
        event='Mi Bautismo'
        bgColor='#dcbe9f'
      />
    </>
  )
}

export default BautizoAndreti;