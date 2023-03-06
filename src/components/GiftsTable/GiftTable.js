import React from 'react';
import img1 from '../../img/aziel/azielwp1.jpg'

const GiftTable = ({
  title
}) => {
  return(
    <div 
      style={{backgroundImage: `url(${img1})`, backgroundSize: 'cover', overflow: 'none'}}
      className='hero'>
      <div  style={{padding: '15px'}}>
        <div className='fullScreen' style={{border: '3px solid #3D9DCB', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '15px', padding: '0 10px'}}>
      <h2 style={{marginTop: '25px', marginBottom: '45px', color: "#93B9E2"}}>
        Mesa de regalos
      </h2>
      <p className='aziel-p w-shadow' style={{fontSize: '28px', color: '#135170', textAlign: 'center'}}>
          <b>
            Nuestro mejor regalo es que estes con nostros en este día, pero si deseas 
            hacernos un presente ¡Aquí te comparto algunos obsequios que podrías considerar!
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
        <ul className='aziel-p'>
          <li>Actualiza la  página antes de visualizar los regalos</li>
          <li>Recuerda reservar tu regalo</li>
        </ul>
        <p className='text-center'>
        Si tienes duda de como hacernos un regalo, puedes enviarnos un mensaje
        </p>
        <a href='https://wa.link/1x1km2' target='_blank' rel="noreferrer"
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
          Escribenos
        </a>
    </div>
    </div>
    </div>
    </div>
  )
}

export default GiftTable;