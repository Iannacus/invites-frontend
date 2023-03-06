import React from 'react';
import Carousel from '../carousel/Carousel'

const GalerySection = () => {
  return (
    <>
      <h2 
        className='text-center'
        style={{marginTop: '25px', marginBottom: '25px', color: "#93B9E2"}}
      >
        Galeria
      </h2>
      <Carousel />
    </>
  )
}

export default GalerySection;