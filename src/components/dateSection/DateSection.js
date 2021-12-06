import React from 'react';
import img2 from '../../img/fotosXVCamila/dos.png'
import Contador from './Contador';
import './DateSection.css';

const DateSection = () => {
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
          <h1 style={{color: '#FFF', fontSize: '56px', marginBottom: '20px'}}>18 Dic 2021</h1>
          <h5 style={{color: '#FFF'}}>Sólo Faltan: </h5>
          <Contador />
        </div>
      </div>
    </div>
  )
}

export default DateSection;