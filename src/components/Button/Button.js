import React from 'react';

const Button = ({ textButton, link }) => {
  return (
    <a href={link} target='_blank' rel="noreferrer"
      style={{
        textDecoration: 'none'
      }}
    >
      <div style={{
          width: '50%',
          margin: 'auto',
          padding: '10px 15px',
          color: '#FFF',
          backgroundColor: '#82bed6',
          borderRadius: '7px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {textButton}
      </div>
    </a>
  )
}

export default Button;