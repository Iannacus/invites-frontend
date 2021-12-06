import React from 'react';

const Mentions = ({ title, children }) => {
  return (
    <div>
      <h4 className='purple text-center'>
        {title}
      </h4>
      {children}
    </div>
  )
}

export default Mentions;