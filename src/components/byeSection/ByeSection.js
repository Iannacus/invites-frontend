import React from 'react';

const ByeSection = ({text1, name, event, bgColor}) => {
  return(
    <div 
      style={{height: '50vh', backgroundColor: bgColor}}
      className='fullScreen centerItem'
    >
      <h4 className='text-center white'> {text1} </h4>
      <br />
      <br />
      <h3 className='white text-center'> {name} </h3>
      <h3 className='white'> {event} </h3>
    </div>
  )
}

export default ByeSection;