import React from 'react';

const ByeSection = ({text1, name, event, bgColor}) => {
  return(
    <div 
      style={{height: '70vh', backgroundColor:  "#93B9E2", padding: '20px'}}
      className='fullScreen centerItem'
    >
      <p className='aziel-p w-shadow' style={{fontSize: '28px', color: '#135170', textAlign: 'center'}}>
          <b>
            Los pies más pequeños hacen las huellas más grandes en nuestros corazones
          </b>
        </p>
      <br />
      <br />
      <h3 className='white text-center'> {name} </h3>
      <h3 className='white'> {event} </h3>
    </div>
  )
}

export default ByeSection;