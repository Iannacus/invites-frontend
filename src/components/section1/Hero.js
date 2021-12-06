import React from 'react';
import sticker from '../../img/fotosXVCamila/sticker.png'
import './Hero.css';

const Hero = () => {
  return(
    <div className='centerItem fullScreen hero'>
      <div className='present'>
        <div className='sticker'>
          <img src={sticker} alt='sticker camila' />
        </div>
        <h1>Camila</h1>
        <p className='subtitle'>MIS 15 AÑOS</p>
      </div>
    </div>
  )
}

export default Hero;