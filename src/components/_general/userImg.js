import React from 'react';

import imgUser from '../../images/system/voluntarios-large.png';
import '../../styles/_general/userImg.scss';

const UserImg = () => {
  return (
    <div className="bg-img">
      <div className="img">
        <img src={imgUser} alt="Usuário" title="Usuário" />
      </div>
    </div>
  )
}

export default UserImg;