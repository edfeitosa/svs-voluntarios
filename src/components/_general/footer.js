import React from 'react';
import { NavLink } from 'react-router-dom';

import back from '../../images/icons/back.png';
import search from '../../images/icons/search.png';
import newUser from '../../images/icons/new-user.png';
import home from '../../images/icons/home.png';

import '../../styles/_general/footer.scss';

export const FooterCreateUser = () => {
  return (
    <div className="footer">

      <div className="bottom-33">
        <div className="img-icon">
          <img src={back} className="img" alt="Voltar" title="Voltar" />
        </div>
        Anterior
      </div>

      <NavLink to="/user?page=searchuser" className="bottom-33">
        <div className="img-icon">
          <img src={search} className="img" alt="Buscar" title="Buscar" />
        </div>
        Buscar
      </NavLink>

      <NavLink to="/" className="bottom-33">
        <div className="img-icon">
          <img src={home} className="img" alt="Home" title="Home" />
        </div>
        Início
      </NavLink>

    </div>
  )
}

export const FooterSearchUser = () => {
  return (
    <div className="footer">

      <div className="bottom-33">
        <div className="img-icon">
          <img src={back} className="img" alt="Voltar" title="Voltar" />
        </div>
        Anterior
      </div>

      <NavLink to="/user?page=createuser&level=voluntario" className="bottom-33">
        <div className="img-icon">
          <img src={newUser} className="img" alt="Novo usuário" title="Novo usuário" />
        </div>
        Cadastrar
      </NavLink>

      <NavLink to="/" className="bottom-33">
        <div className="img-icon">
          <img src={home} className="img" alt="Home" title="Home" />
        </div>
        Início
      </NavLink>

    </div>
  )
}