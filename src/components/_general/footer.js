import React from 'react';
import { NavLink } from 'react-router-dom';

import home from '../../images/icons/home.png';
import user from '../../images/icons/user.png';
import exit from '../../images/icons/exit.png';

import '../../styles/_general/footer.scss';

export const Footer = () => {
  return (
    <div className="footer">

      <NavLink to="/" className="bottom-33">
        <div className="img-icon">
          <img src={home} className="img" alt="Home" title="Home" />
        </div>
        Início
      </NavLink>

      <NavLink to="/" className="bottom-33">
        <div className="img-icon">
          <img src={user} className="img" alt="Editar" title="Editar" />
        </div>
        Meus dados
      </NavLink>

      <NavLink to="/" className="bottom-33">
        <div className="img-icon">
          <img src={exit} className="img" alt="Sair" title="Sair" />
        </div>
        Sair
      </NavLink>

    </div>
  )
}