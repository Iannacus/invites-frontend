import React from 'react';
import img1 from '../../img/andreti/andreti.jpg';
import sticker1 from '../../img/andreti/boautizos-cometa-paloma.png';

const HeroAndreti = () => {
  return(
    <div 
      style={{backgroundImage: `url(${img1})`}}
      className='fullScreen hero'>
      <div className='shadow'>
        <div className='centerItem fullScreen'>
          <div className='present'>
            <div className='dove'>
              <img src={sticker1} alt='sticker camila' />
            </div>
            <h1 className='t-shadow' style={{color: '#dcbe9f'}}>Andretti</h1>
            <p 
              className='subtitle t-shadow'
              style={
                {
                  fontSize: '20px',
                  color: '#dcbe9f'
                }
              }
            >
              MI BAUTIZO
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAndreti;