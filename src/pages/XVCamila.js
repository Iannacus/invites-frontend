import React from 'react';
import ByeSection from '../components/byeSection/ByeSection';
import DateSection from '../components/dateSection/DateSection';
import GalerySection from '../components/galerySection/GalerySection';
import ReceptionSection from '../components/receptionSection/ReceptionSection';
import Hero from '../components/section1/Hero';
import Section2 from '../components/section2/Section2';

const XVCamila =  ({ firstname, lastname }) => {

  return(
    <>
      <Hero />
      <Section2 
        firstname={firstname}
        lastname={lastname}  
      />
      <DateSection />
      <ReceptionSection />
      <GalerySection />
      <ByeSection />
    </>
  )
}

export default XVCamila;