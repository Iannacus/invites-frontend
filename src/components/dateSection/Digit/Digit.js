import React from 'react';
import './Digit.css';

const Digit = ({ textDigit, textDescription }) => {
  const formatDigit = (digit) => {
    if(digit < 10) 
      return `0${digit}`
    return `${digit}`
  }
  return(
    <div className='centerItem'>
      <p
        style={{margin: '0', color: '#93B9E2'}} 
        className='digit b-shadow'>
      {formatDigit(textDigit)}
      </p>
      <p className="b-shadow" style={{fontSize: '14px', color: '#93B9E2', margin: '0'}}>{textDescription}</p>
      </div>
  )  
}

export default Digit;