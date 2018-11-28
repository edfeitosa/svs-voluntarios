import React from 'react';

import voluntariosSmall from '../../images/system/voluntarios-small.png';
import savassi from '../../images/system/savassi.png';

import '../../styles/_layout/header.scss';

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="iconcentral">
            <img src={savassi} alt="savassi" />
          </div>
          <div className="iconright">
            <img src={voluntariosSmall} alt="svs" />
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </header>
  )
}

export default Header;