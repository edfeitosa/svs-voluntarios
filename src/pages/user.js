import React from 'react';
import queryString from 'query-string';

import CreateUser from '../components/user/createUser';
import AddListUser from '../components/user/addListUser';
import SearchUser from '../components/user/searchUser';

import ModalUser from './../components/_general/modalUser';

import newItem from './../images/icons/new.png';

import './../styles/pages/user.scss';

class User extends React.Component {

    state = {
        showModal: false
    }

    showModal = (show) => this.setState({ showModal: show });

    render() {

        const parsed = queryString.parse(window.location.search);

        const { showModal } = this.state;

        return (
            <div className="padding-content">
                {
                    showModal &&
                    <ModalUser
                        showModal={showModal}
                        alterModalState={this.showModal}
                    />
                }
                {parsed.page === 'createuser' && <CreateUser level={parsed.level} />}
                {parsed.page === 'addlistuser' && <AddListUser />}
                {parsed.page === 'searchuser' && <SearchUser />}
                {
                    !parsed.page &&
                    <div>
                        <h3>Usuários</h3>
                        <div className="new-buttom" onClick={this.showModal}>
                            <img src={newItem} alt="Novo" title="Novo" />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default User;