import React from 'react';
import ByeSection from '../components/byeSection/ByeSection';
import DateSection from '../components/dateSection/DateSection';
import GalerySection from '../components/galerySection/GalerySection';
import ReceptionSection from '../components/receptionSection/ReceptionSection';
import Hero from '../components/section1/Hero';
import Section2 from '../components/section2/Section2';
import sticker from '../img/fotosXVCamila/sticker.png'

const XVCamila =  ({ firstname, lastname, confirmation, id, loading, setSpiner }) => {
  console.log(firstname)
  return(
    <>
      <Hero
        sticker={sticker}
      />
      <Section2 
        firstname={firstname}
        lastname={lastname}  
      />
      <DateSection 
        confirmation={confirmation}
        guestId={id}
        loading={loading}
        setSpiner={setSpiner}
      />
      <ReceptionSection
        title='Recepción'
      />
      <GalerySection />
      <ByeSection 
        text1='¡Esperamos contar con tu asistencia!'
        name='Camila Ramos'
        event='Mis XV'
        bgColor='#c2c2e9'
      />
    </>
  )
}

export default XVCamila;