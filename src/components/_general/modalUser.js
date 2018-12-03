import React from 'react';
import { NavLink } from 'react-router-dom';

import question from '../../images/icons/question.png';
import minister from '../../images/icons/minister.png';
import leader from '../../images/icons/leader.png';
import volunteers from '../../images/icons/volunteers.png';
import user from '../../images/icons/user.png';

import '../../styles/_general/modalUser.scss';

const buttons = [
  {
    title: 'Central',
    img: volunteers,
    link: '/user?page=createuser&level=central'
  },
  {
    title: 'Pastor',
    img: minister,
    link: '/user?page=createuser&level=pastor'
  },
  {
    title: 'Líder',
    img: leader,
    link: '/user?page=createuser&level=lider'
  },
  {
    title: 'Voluntário',
    img: user,
    link: '/user?page=createuser&level=voluntario'
  }
]

const ModalUser = ({
  showModal,
  alterModalState
}) => {

  const closeModal = () => {
    let show = !showModal;
    alterModalState && alterModalState(show);
  }

  return (
    <div className="bg-modal">
      <div className="modal-user">
        <div className="header -question">
          <img src={question} alt="question" />
        </div>
        <div className="title-user">
          Cadastrar em qual grupo?
        </div>
        {
          buttons.map((item, i) =>
            <div key={i} className="buttom-modal">
              <NavLink to={item.link} onClick={closeModal}>
                <div className="icon-buttom-modal">
                  <img src={item.img} alt={item.title} title={item.title} />
                </div>
                <div className="title-buttom-modal">{item.title}</div>
              </NavLink>
            </div>
          )
        }
        <input
          type="submit"
          className="buttom -clear"
          name="clear"
          value="CANCELAR"
          onClick={closeModal}
        />
      </div>
    </div>
  )
}

export default ModalUser;