import React from 'react';
import queryString from 'query-string';
import { NavLink } from 'react-router-dom';

import newItem from './../images/icons/new.png';

import CreateDepartment from '../components/departments/createDepartment';

class Departments extends React.Component {
    render() {

        const parsed = queryString.parse(window.location.search);
        
        return (
            <div className="padding-content">
                {parsed.page === 'createdepartment' && <CreateDepartment />}
                {
                    !parsed.page &&
                    <div>
                        <h3>DEPARTAMENTOS</h3>
                        <div className="new-buttom">
                            <NavLink to="/departments?page=createdepartment">
                              <img src={newItem} alt="Novo" title="Novo" />
                            </NavLink>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Departments;