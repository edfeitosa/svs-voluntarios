import React from 'react';

import success from '../../images/icons/success.png';
import alert from '../../images/icons/alert.png';
import error from '../../images/icons/error.png';
import question from '../../images/icons/question.png';
import information from '../../images/icons/information.png';

import '../../styles/_general/modal.scss';

const icons = {
  success: success,
  error: error,
  alert: alert,
  question: question,
  information: information
}

const divClass = {
  success: 'header -success',
  error: 'header -error',
  alert: 'header -alert',
  question: 'header -question',
  information: 'header -information'
}

const Modal = ({
  showModal,
  data,
  alterModalState
}) => {

  const closeModal = () => {
    let show = !showModal;
    alterModalState && alterModalState(show);
  }

  return (
    <div className="bg-modal">
      <div className="modal">
        <div className={ divClass[data.type] }>
          <img src={ icons[data.type] } alt="icon-header" />
        </div>
        <div className="title">
          { data.title }
        </div>
        <div className="message">
          { data.message }
        </div>
        <input
          type="submit"
          className="buttom -clear"
          name="clear"
          value="OK"
          onClick={closeModal}
        />
      </div>
    </div>
  )
}

export default Modal;