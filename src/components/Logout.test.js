import React from 'react';
import { shallow } from 'enzyme';
import { Logout } from './Logout';

describe('<Logout />', () => {

    it('renders without crashing', () => {
        shallow(<Logout dispatch={() => "return"} />)
    });

    it('Redirects to /home', () => {
        const wrapper = shallow(<Logout dispatch={() => "return"} />)
        expect(wrapper.find('Redirect').props('to').to).toContain('/home')
    });

})
