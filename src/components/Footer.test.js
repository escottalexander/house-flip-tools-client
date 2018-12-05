import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {


    it('renders without crashing', () => {
        shallow(<Footer />)
    });

    it('renders Footer element with proper class', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.hasClass('Footer')).toEqual(true);
    });

})
