import React from 'react';
import queryString from 'query-string';

import CreateUser from '../components/user/createUser';
import AddListUser from '../components/user/addListUser';
import SearchUser from '../components/user/searchUser';

class User extends React.Component {

    render() {

        const parsed = queryString.parse(window.location.search);

        return (
            <div>
                {parsed.page === 'createuser' && <CreateUser level={parsed.level} />}
                {parsed.page === 'addlistuser' && <AddListUser />}
                {parsed.page === 'searchuser' && <SearchUser />}
            </div>
        )
    }
}

export default User;