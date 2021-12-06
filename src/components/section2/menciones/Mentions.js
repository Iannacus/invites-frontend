import React from 'react';

const Mentions = ({ title, children }) => {
  return (
    <div>
      <h5 className='blue text-center'>
        {title}
      </h5>
      {children}
    </div>
  )
}

export default Mentions;