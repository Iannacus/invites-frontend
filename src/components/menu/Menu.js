import React from "react";
import './Menu.css';
import MenuItem from "./MenuItem";
import TopBar from "./TopBar";
import logo from '../../img/icons/logo.svg'

const MenuItems= [
  {
    icon: <></>,
    title: 'InviteMe',
    isTitle: true
  },
  {
    icon: <i class="fas fa-house-user"></i>,
    title: 'Dashboard',
    isTitle: false
  },
  {
    icon: <i class="fas fa-user"></i>,
    title: 'Invitados',
    isTitle: false
  },
  {
    icon: <i class="fas fa-comment-dots"></i>,
    title: 'Mensajes',
    isTitle: false
  },
  {
    icon: <i class="fas fa-question-circle"></i>,
    title: 'Ayuda',
    isTitle: false
  },
  {
    icon: <i class="fas fa-user-cog"></i>,
    title: 'Ajustes',
    isTitle: false
  },
  {
    icon: <i class="fas fa-user-lock"></i>,
    title: 'Seguridad',
    isTitle: false
  },
  {
    icon: <i class="fas fa-sign-out-alt"></i>,
    title: 'Salir',
    isTitle: false
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
                  isTitle={item.isTitle}
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