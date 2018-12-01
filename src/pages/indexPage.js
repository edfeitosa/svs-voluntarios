import React from 'react';

import UserImg from './../components/_general/userImg'
import Buttons from '../components/index/buttons';

import './../styles/pages/index.scss';

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <UserImg />
                <Buttons />
            </div>
        )
    }
}

export default IndexPage;