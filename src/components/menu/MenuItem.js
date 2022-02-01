import React from 'react';

const MenuItem = ({ icon, itemTitle, isTitle }) => {
  const clases = isTitle ? 'logo' : 'title'
  return (
    <a href="#">
      <span className="icon">{icon}</span>
      <span className={clases} >{itemTitle}</span>
    </a>
  )
}

export default MenuItem;