import React from 'react';

const NumberInput = ({funct, alert}) => {
  return(
    <input
      className='number-input'
      type='tel'
      placeholder={alert ? 'Ingresar cantidad': 'Cantdad de personas'}
      onChange={e => funct(e)}
      onKeyPress={(e) => {
        console.log(e.charCode)
        if (e.charCode < 45 || e.charCode > 57){
          e.preventDefault();
        } 
          
      }}
      style={{
        border: alert ? '3px solid #C70039': 'none'
      }}
    />
  )
};

export default NumberInput;