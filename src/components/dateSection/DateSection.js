import React from 'react';
import img2 from '../../img/fotosXVCamila/dos.png'
import Button from '../Button/Button';
import Contador from './Contador';
import './DateSection.css';

const DateSection = () => {


  const handleConfirmation = () => {
    console.log('envinado confirmacion')
    // fetch('https://invitaciones-back.herokuapp.com/api/v1/guests', {
    //   method: 'PUT',
    //   body: JSON.stringify(),
    //   headers:{
    //     'Content-Type': 'appllication/json'
    //   }
    // })
    // .then(response => response.json())
    // .catch(error => console.error('Error', error))
    // .then(response => console.log('Succes', response));
  }

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
          <Button 
            textButton='Confirmar Asistencia'
            color='#82bed6' 
            bgColor='#FFF'
            onClick={() => handleConfirmation}
          />
        </div>
      </div>
    </div>
  )
}

export default DateSection;