import React from 'react';
import Mentions from './menciones/Mentions';
import img1 from '../../img/aziel/azielwp2.png';
import sleep from '../../img/aziel/sleeping-penguin.png';
import './Section2.css';

const Section2 = ({ firstname, lastname }) => {
  return(
    <div 
      style={{backgroundImage: `url(${img1})`, backgroundSize: 'cover', overflow: 'none', height: '100vh'}}
      className='hero'>
    <div  style={{padding: '15px', height: '100vh'}}>
    <div
      style={{ height: '100%', position: 'relative'}} 
      className='centerItem container'
    >
      <div style={{background: 'rgba(255, 255, 255, 0.7)', padding: '5px', borderRadius: '10px', width: '100%'}}>
        {/* <p className='aziel-p w-shadow' style={{fontSize: '32px', color: '#135170', textAlign: 'center'}}>
          <b>
            Los pies más pequeños hacen las huellas más grandes en nuestros corazones
          </b>
        </p> */}
        <h2 className='t-shadow text-center' style={{fontSize: '2.2rem', color: '#3D9DCB'}}>Familia Rosas Ramos</h2>
        <br />
        <p className='no-margin aziel-p text-center' style={{fontSize: '28px'}}>Estefany Ramos Lopez</p>
        <p className='no-margin aziel-p text-center' style={{fontSize: '28px'}}>Ian Adriel Rosas Maldonado</p>
        <br />
        <p
          style={{margin: '0', fontSize: '24px'}} 
          className='no-margin aziel-p text-center'
        >
          Tienen el honor de invitar a <b>{firstname} {lastname}</b> a celebrar un momento especial
          en su vida. 
        </p>
      </div>
      <div style={{position: 'absolute', bottom: '-100px'}}>
        <img src={sleep} alt="aziel penguin sleeping" style={{width: '80%'}} />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Section2;