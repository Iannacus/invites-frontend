import React from 'react';
import Mentions from '../section2/menciones/Mentions';

const Presentation = () => {
  return(
    <div style={{background: '#9d9e9c', padding: '15px'}} >
      <div
        className='centerItem container'
        style={{
          color: '#fff',
          border: '1px solid #e3e7ea',
          textAlign: 'center'
        }}
      >
        <p>
        "Señor, haz que el recuerdo de este día puro y dulce, siempre guíe la vida de este pequeño ángel."
        </p>

        <h3 style={{color: '#dcbe9f'}}>Mis padres</h3>
        <Mentions title={''}>Jason Henry Seeberger</Mentions>
        <Mentions title={''}>Estrellita Enif Gómez Maldonado</Mentions>
        <br />
        <h3 style={{color: '#dcbe9f'}}>Mis padrinos</h3>
        <Mentions title={''}>David Benoni Rivera Gonzalez</Mentions>
        <Mentions title={''}>Elsy Luz Corro Maldonado</Mentions>
      </div>
    </div>
  )
}

export default Presentation; 