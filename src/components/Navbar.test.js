import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from './Navbar';
import { exampleAccountInitialized } from '../actions';

describe('<Navbar />', () => {


    it('Renders without crashing', () => {
        shallow(<Navbar slugify={() => "nothing"} />)
    });

    it('Renders proper links when logged in', () => {
        const wrapper = shallow(<Navbar slugify={() => "nothing"} loggedIn={true} />)
        expect(wrapper.find('.Logout')).toHaveLength(1)
    });

    it('Renders proper links when logged out', () => {
        const wrapper = shallow(<Navbar slugify={() => "nothing"} loggedIn={false} />)
        expect(wrapper.find('.Login')).toHaveLength(1)
    });
})
