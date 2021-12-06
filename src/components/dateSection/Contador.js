import React, { useEffect, useState } from 'react';
import Digit from './Digit/Digit';
import DigitSeparator from './DigitSeparator/DigitSeparator';
import './Contador.css';

const Contador = () => {
  const [left, setLeft] = useState('');
  const [leftDays, setLeftDays] = useState('');
  const [leftHours, setLeftHours] = useState('');
  const [leftMinutes, setLeftMinutes] = useState('');
  const [leftSeconds, setLeftSeconds] = useState('');
  const [blinkFlag, setBlinkFlag] = useState(true);


  
  useEffect(() => {
    const actualDate = new Date();
    const partyDate = new Date(Date.UTC(2021, 11, 19, -2, 0, 0, 0));
    const interval = setInterval(() => {
      setLeft(partyDate - actualDate);
      setBlinkFlag(prevBlinkFlag => !prevBlinkFlag);
    },1000);
    return () => clearInterval(interval);
  }, [left]);

  useEffect(() => {
    setLeftDays(Math.floor(left/(1000*3600*24)));
    setLeftHours(Math.floor(left/(1000*3600)));
    setLeftMinutes(Math.floor(left/(1000*60)));
    setLeftSeconds(Math.ceil(left/(1000)));
    
  }, [left])

  return (
    <div className='counter-container'>
    <Digit textDigit={leftDays} />
    <DigitSeparator blink={blinkFlag} />
    <Digit textDigit={leftHours % 24} />
    <DigitSeparator blink={blinkFlag} />
    <Digit textDigit={leftMinutes % 60} />
    <DigitSeparator blink={blinkFlag} />
    <Digit textDigit={leftSeconds % 60} />
    </div>
  )
}

export default Contador;