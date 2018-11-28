import React from 'react';

import Buttons from '../components/index/buttons';

import './../styles/pages/index.scss';

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <div className="sub-title">
                    O QUE DESEJA FAZER?
                    </div>
                <Buttons />
            </div>
        )
    }
}

export default IndexPage;