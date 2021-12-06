import React from 'react';
import sticker1 from '../../img/fotosXVCamila/sticker1.png'
import img1 from '../../img/fotosXVCamila/uno.png'
import './Hero.css';

const Hero = () => {
  return(
    <div 
      style={{backgroundImage: `url(${img1})`}}
      className='fullScreen hero'>
      <div className='shadow'>
        <div className='centerItem fullScreen'>
          <div className='present'>
            <div className='sticker'>
              <img src={sticker1} alt='sticker camila' />
            </div>
            <h1 className='blue'>Camila</h1>
            <p className='subtitle gold'>MIS 15 AÑOS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;