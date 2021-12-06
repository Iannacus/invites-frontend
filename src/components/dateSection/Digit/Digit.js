import React from 'react';
import './Digit.css';

const Digit = ({ textDigit }) => {
  return(
    <p className='digit'>
      {textDigit}
    </p>
  )
}

export default Digit;