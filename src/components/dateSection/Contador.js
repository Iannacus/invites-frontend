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


  
  useEffect(() => {
    const actualDate = new Date();
    const partyDate = new Date(Date.UTC(2021, 11, 19, -2, 0, 0, 0));
    const interval = setInterval(() => {
      setLeft(partyDate - actualDate);
    },1000);
    return () => clearInterval(interval);
  }, [left]);

  useEffect(() => {
    const dias = Math.floor(left/(1000*3600*24));
    const horas = Math.floor(left/(1000*3600));
    const min = Math.floor(left/(1000*60));
    const sec = Math.ceil(left/(1000));

    setLeftDays(dias);
    setLeftHours(horas);
    setLeftMinutes(min);
    setLeftSeconds(sec);
    
  }, [left])

  return (
    <div className='counter-container'>
    <Digit textDigit={leftDays} textDescription='Días' />
    <DigitSeparator />
    <Digit textDigit={leftHours % 24} textDescription='Horas'/>
    <DigitSeparator />
    <Digit textDigit={leftMinutes % 60} textDescription='Min'/>
    <DigitSeparator />
    <Digit textDigit={leftSeconds % 60} textDescription='Seg'/>
    </div>
  )
}

export default Contador;