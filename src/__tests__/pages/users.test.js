import React from 'react';
import { MemoryRouter as Router, withRouter } from 'react-router-dom';
import User from './../../pages/user';

describe('user component', () => {

    let wrapper;
    beforeEach(() => wrapper = mount(
        <Router>
            <User />
        </Router>
    ));

    test('renders without crashing', () => {
        const wrapper = renderer
            .create(
                <Router>
                    <User />
                </Router>
            )
            .toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    test('initial state', () => {
        const wrapper = mount(<User />);
        expect(wrapper.state().showModal).toEqual(false);
        wrapper.unmount();
    });

    test('simulate click for change state', () => {
        wrapper.find('.new-buttom').simulate('click', (
            wrapper.setState({ showModal: true })
        ));
        expect(wrapper.state().showModal).toEqual(true);
        wrapper.unmount();
    });

});