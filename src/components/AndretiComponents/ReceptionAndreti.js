import React from 'react';
import ReceptionCard from './ReceptionCard';
import misa from '../../img/andreti/carmelirasdescalzas.png';
import mima from '../../img/andreti/mima.png';

const ReceptionAndreti = () => {
  return(
    <div className='centerItem'>
      <h2 style={{marginTop: '25px', marginBottom: '45px', color: '#9d9e9c'}} >
        Misa
      </h2>
      <ReceptionCard
        img={misa}
        placeName='Capilla de las Carmelitas Descalzas'
        placeDescription='Calle 40 #13 Playa Norte'
        hour='12:00 PM'
        ubication='https://goo.gl/maps/wX9CYfJBqgfPZnt58'
      />
      <h2 style={{marginTop: '25px', marginBottom: '45px', color: '#9d9e9c'}} >
        Recepción
      </h2>

      <ReceptionCard
        img={mima}
        placeName='Casa de la tia Deneb'
        placeDescription='Calle 47 Col. Pérez Martínez'
        hour='14:00 PM'
        ubication='https://goo.gl/maps/NFsQnyboEmBCxjry9'
      />
    </div>
  )
}

export default ReceptionAndreti;