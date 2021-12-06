import React from 'react';
import Contador from '../components/dateSection/Contador';
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
      <Contador />
    </>
  )
}

export default XVCamila;