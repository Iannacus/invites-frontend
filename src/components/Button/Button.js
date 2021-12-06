import React from 'react';

const Button = ({ textButton, color, bgColor, funct }) => {
  return (
    
      <div style={{
          margin: '0 auto',
          padding: '10px 15px',
          color: color,
          backgroundColor: bgColor,
          borderRadius: '7px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        className='hover-pointer'
        onClick={() => funct()}
      >
        {textButton}
      </div>
  )
}

export default Button;