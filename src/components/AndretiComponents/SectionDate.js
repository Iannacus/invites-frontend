import React from 'react';
import Contador from '../dateSection/Contador';
import img2 from '../../img/andreti/baptism.jpg'

const SectionDate = () => {
  return(
    <div 
      className='hero'
      style={
        {
          backgroundImage: `url(${img2}`,
        }
      } 
    >
      <div 
        className='shadow'
        style={{padding: '15px'}}
      >
        <div className='fullScreen centerItem section-border'>
          <h1 style={{color: '#FFF', fontSize: '56px', marginBottom: '20px'}}>8 Enero 2022</h1>
          <h5 style={{color: '#FFF'}}>Sólo Faltan: </h5>
          <Contador />
        </div>
      </div>
    </div>
  )
}

export default SectionDate;