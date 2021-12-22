import React from 'react';
import Contador from '../dateSection/Contador';
import img2 from '../../img/andreti/baptism.jpg'

const SectionDate = ({firstname, lastname}) => {
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
        <p
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: '20px',
              margin: '0'
            }}
          >
            {firstname} {lastname}
          </p>
          <p
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: '20px',
              marginBottom: '50%'
            }}
          >
            Estas cordialmente invitado a la celebración de mi bautismo.
          </p>
          <h2 style={{color: '#FFF', fontSize: '48px', marginBottom: '20px'}}>08 enero 2022</h2>
          <h5 style={{color: '#FFF'}}>Sólo Faltan: </h5>
          <Contador />
        </div>
      </div>
    </div>
  )
}

export default SectionDate;