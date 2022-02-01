import React from "react";
import './Menu.css';
import MenuItem from "./MenuItem";
import TopBar from "./TopBar";

const MenuItems= [
  {
    icon: <i class="fab fa-bandcamp"></i>,
    title: 'Invite You'
  },
  {
    icon: <i class="fas fa-house-user"></i>,
    title: 'Dashboard'
  },
  {
    icon: <i class="fas fa-user"></i>,
    title: 'Invitados'
  },
  {
    icon: <i class="fas fa-comment-dots"></i>,
    title: 'Mensajes'
  },
  {
    icon: <i class="fas fa-question-circle"></i>,
    title: 'Ayuda'
  },
  {
    icon: <i class="fas fa-user-cog"></i>,
    title: 'Ajustes'
  },
  {
    icon: <i class="fas fa-user-lock"></i>,
    title: 'Seguridad'
  },
  {
    icon: <i class="fas fa-sign-out-alt"></i>,
    title: 'Salir'
  }
]

const Menu = () => {
  return(
    <div calssName="container">
      <div className="navigation">
        <ul>
          {
            MenuItems.map(item =>
              <li>
                <MenuItem 
                  icon={item.icon}
                  itemTitle={item.title}
                />
              </li>
            )
          }
        </ul>      
      </div>
      <div className="main">
        <TopBar />
      </div>
    </div>
  )
}

export default Menu;