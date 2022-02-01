import React from 'react';

const TopBar = () => {
  return(
    <div className='topbar'>
      <div class="toggle"><i class="fas fa-bars"></i></div>
        
      <div class="search">
        <label>
          <input type="text" placeholder="Search here" />
          <i class="fas fa-search"></i>
        </label>
      </div>
        
      <div class="user">
        <img src="https://pbs.twimg.com/profile_images/2456580926/ipe_400x400.png" alt="" />
      </div>
    </div>
  )
}

export default TopBar;