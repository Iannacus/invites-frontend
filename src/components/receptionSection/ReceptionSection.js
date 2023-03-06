import React from 'react';
import recepcionImg from '../../img/aziel/sala.png';
import Button from '../Button/Button';

const ReceptionSection = ({
  title
}) => {
  return(
    <div className='centerItem'>
      <h2 style={{marginTop: '25px', marginBottom: '45px', color: "#93B9E2"}}>
        {title}
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
        <h4 className='text-center' style={{color: "#93B9E2"}}>
          Salón de Fiestas - Mi Sala
        </h4>
        <p className='text-center aziel-p' style={{fontSize: '28px'}}>Santa Rita 1, El Potrero, 24155 Cd del Carmen, Camp.</p>
        <h4 style={{marginBottom: '35px', color: "#93B9E2"}} className='blue text-center'>4:00 pm</h4>
        <a href='https://goo.gl/maps/umyJ1u7NQeeYjGsJ6' target='_blank' rel="noreferrer"
          style={{
            textDecoration: 'none',
            display: 'block',
            margin: 'auto',
            width: '50%',
          padding: '10px 15px',
          color: '#FFF',
          backgroundColor: '#93B9E2',
          borderRadius: '7px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
          }}
        >
          ¿Cómo llegar?
        </a>
      </div>
      <h2 style={{marginTop: '25px', marginBottom: '45px', color: "#93B9E2"}}>
        Mesa de regalos
      </h2>
      <p className='aziel-p w-shadow' style={{fontSize: '28px', color: '#135170', textAlign: 'center'}}>
          <b>
            Nuestro mejor regalo es que estes con nostros en este día, pero si deseas 
            hacernos un obsequio ¡Aquí te comparto algunos obsequios que podrías considerar!
          </b>
        </p>
        <a href='https://regalame.app/babyazieleduardo/baby-shower-aziel-eduardo' target='_blank' rel="noreferrer"
          style={{
            textDecoration: 'none',
            display: 'block',
            margin: 'auto',
            width: '50%',
          padding: '10px 15px',
          color: '#FFF',
          backgroundColor: '#93B9E2',
          borderRadius: '7px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
          }}
        >
          Mesa de Regalos
        </a>
    </div>
  )
}

export default ReceptionSection;