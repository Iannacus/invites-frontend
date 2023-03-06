import React from 'react';
import img1 from '../../img/aziel/azielwp2.png';
import banner from '../../img/aziel/banner-purple.png';
import stars from '../../img/aziel/azielStars-removebg-preview.png';
import './Hero.css';

const Hero = ({sticker}) => {
  return(
    <div 
      style={{backgroundImage: `url(${img1})`, backgroundSize: 'cover', overflow: 'none'}}
      className='hero'>
      <div  style={{padding: '15px'}}>
        <div className='fullScreen' style={{paddingTop: '20px' ,border: '3px solid #3D9DCB', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
        <div style={{ paddingTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginTop: '20px'}}>
          <h1
            className='aziel penguin t-shadow'
            style={{
              fontSize: '52px',
              color: '#3D9DCB',
            }}
          >
            {'  '}
          </h1>
          <span className='aziel penguin t-shadow' style={{ fontSize: '90px', color: '#3D9DCB'}}>
              {' '} 
            </span>
        </div>
          <p className='aziel-p' style={{fontSize: '32px', color: '#135170', textAlign: 'center'}}>
            Acompañanos a celebrear el Baby Shower de: 
          </p>
          <div className='sticker' style={{ marginBottom: '0px'}}>
            <img src={sticker} alt='sticker camila' />
          </div>
          
        </div>
        <div 
          style={{
            width: '90%',
            position: 'absolute',
            zIndex: '10',
            top: '10px',
            bottom: 0,
            left: 0,
            right: 0,
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
            <img src={banner} style={{width: '100%'}} alt="banner aziel" />
            
        </div>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 11,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1 
            className='penguin aziel b-shadow'
            style={{
              transform: 'rotate(-10deg)',
              fontSize: '50px',
              color: '#FFF'
            }}
          >
            Aziel Eduardo
          </h1> 
        </div>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          <img src={stars} alt="stars" />
        </div>
      </div>
    </div>
  )
}

export default Hero;