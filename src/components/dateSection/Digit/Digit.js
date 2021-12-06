import React from 'react';
import './Digit.css';

const Digit = ({ textDigit, textDescription }) => {
  return(
    <div className='centerItem'>
      <p
        style={{margin: '0'}} 
        className='digit'>
      {textDigit}
      </p>
      <p style={{fontSize: '14px', color: '#FFF', margin: '0'}}>{textDescription}</p>
      </div>
  )
    
}

export default Digit;