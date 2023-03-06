import React from 'react';
import recepcionImg from '../../img/aziel/sala.png';

const ReceptionSection = ({
  title
}) => {
  return(
    <div className='centerItem' style={{marginBottom: '20px'}} >
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
          Mi sala de fiestas
        </h4>
        <p className='text-center aziel-p' style={{fontSize: '24px'}}>Santa Rita 1, El Potrero, 24155 Cd del Carmen, Camp.</p>
        <h4 style={{marginBottom: '35px', color: "#93B9E2"}} className='blue text-center'>4:00 pm</h4>
        <a href='https://goo.gl/maps/umyJ1u7NQeeYjGsJ6' target='_blank' rel="noreferrer"
          style={{
            textDecoration: 'none',
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
    </div>
  )
}

export default ReceptionSection;