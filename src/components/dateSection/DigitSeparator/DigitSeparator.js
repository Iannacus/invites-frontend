import React from 'react';
import '../Digit/Digit.css';

const DigitSeparator = ({ blink }) => {
  
  return(
    <>
      {
        blink ? 
          <p className='digit'>
            :
          </p>
          : 
          <p className='digit'>
           &nbsp;
          </p>
      }
    </>
  )
}

export default DigitSeparator;