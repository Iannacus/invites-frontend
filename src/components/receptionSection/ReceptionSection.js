import React from 'react';
import recepcionImg from '../../img/fotosXVCamila/recepcion.JPG'
import Button from '../Button/Button';

const ReceptionSection = () => {
  return(
    <div className='centerItem'>
      <h2 style={{marginTop: '25px', marginBottom: '45px'}} className='blue'>
        Recepción
      </h2>
      <div
        style={
          {
            width: '90%',
            boxShadow: '0 3px 7px 1px #bdbdbd',
            paddingBottom: '15px',

          }
        }
      >
        <img 
          style={{
            width: '100%',
            margin: '0 0 45px 0'
          }}
          src={recepcionImg}
          alt='ubicación palapa'
        />
        <h4 className='blue text-center'>
          Palapa Aby's
        </h4>
        <p className='gold text-center' style={{fontSize: '18px'}}>Av. Paseo del mar entre calle 78, a un costado de la palapa naval</p>
        <h4 style={{marginBottom: '35px'}} className='blue text-center'>4:00 pm</h4>
        <Button textButton='Cómo llegar' link='https://goo.gl/maps/M6UAXb8i4DBVBe5w5' />
      </div>
    </div>
  )
}

export default ReceptionSection;