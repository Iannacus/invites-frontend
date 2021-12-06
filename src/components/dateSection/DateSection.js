import React, { useState } from 'react';
import img2 from '../../img/fotosXVCamila/dos.png'
import Button from '../Button/Button';
import Contador from './Contador';
import Loader from '../Loader';
import './DateSection.css';
import NumberInput from '../inputs/NumberInput';

const DateSection = ({confirmation, guestId, loading, setSpiner}) => {
  const [number, setNumber] = useState('');
  const [alert, setAlert] = useState(false);

  const handleConfirmation = () => {
    if(number !== ''){
      setSpiner(true);
      fetch(`https://invitaciones-back.herokuapp.com/api/v1/guests/${guestId}`, {
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({confirmation: true, guest_number: number})
      })
      .then(response => response.json())
      .catch(error => console.error('Error', error))
      .then(response => {
        setSpiner(false);
        console.log(response);
        window.location.reload(true);
      });
    }else{
      setAlert(true);
    }
  }

  const handleNumber = (e) => {
    setNumber(e.target.value);
    setAlert(false);
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
          {
            loading ? 
              <Loader />
              :
              !confirmation ? 
                <div className='inputs'>
                  <NumberInput funct={handleNumber} alert={alert}/>
                  <Button 
                    textButton='Confirmar Asistencia'
                    color='#82bed6' 
                    bgColor='#FFF'
                    funct={handleConfirmation}
                  />
                </div>
                
                : 
                <Button 
                  textButton='Gracias por confirmar tu asistencia'
                  color='#82bed6' 
                  bgColor='#FFF'
                  funct={() => {alert("Ya has confirmado tu asistencia")}}
                />
          }
        </div>
      </div>
    </div>
  )
}

export default DateSection;