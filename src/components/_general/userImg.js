import React from 'react';

import imgUser from '../../images/system/user.png';
import '../../styles/_general/userImg.scss';

const UserImg = () => {
  return (
    <div className="bg-img">
      <div className="img">
        <img src={imgUser} alt="Usuário" title="Usuário" />
      </div>
      <div className="clear"></div>
      <div className="title">
        EDUARDO FEITOSA
      </div>
    </div>
  )
}

export default UserImg;