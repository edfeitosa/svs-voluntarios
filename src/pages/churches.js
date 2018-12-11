import React from 'react';
import queryString from 'query-string';
import { NavLink } from 'react-router-dom';

import newItem from './../images/icons/new.png';

import CreateChurch from '../components/churches/createChurch';

class Churches extends React.Component {
    render() {
        const parsed = queryString.parse(window.location.search);
        
        return (
            <div className="padding-content">
                {parsed.page === 'createchruch' && <CreateChurch />}
                {
                    !parsed.page &&
                    <div>
                        <h3>IGREJAS</h3>
                        <div className="new-buttom">
                            <NavLink to="/churches?page=createchruch">
                              <img src={newItem} alt="Novo" title="Novo" />
                            </NavLink>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Churches;