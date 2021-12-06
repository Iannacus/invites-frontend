import React from 'react';
import Carousel from '../carousel/Carousel'

const GalerySection = () => {
  return (
    <>
      <h2 
        className='gold text-center'
        style={{marginTop: '25px', marginBottom: '25px'}}
      >
        Galeria
      </h2>
      <Carousel />
    </>
  )
}

export default GalerySection;