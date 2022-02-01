import React from 'react';

const MenuItem = ({ icon, itemTitle }) => {
  return (
    <a href="#">
      <span className="icon">{icon}</span>
      <span className="title">{itemTitle}</span>
    </a>
  )
}

export default MenuItem;