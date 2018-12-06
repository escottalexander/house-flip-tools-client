import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('<Input />', () => {
    const meta = {
        touched: "",
        error: "",
        warning: ""
    }

    it('renders without crashing', () => {
        shallow(<Input meta={meta} label={"Address"} input={{ name: "name" }} />)
    });

    it('renders input element with proper class', () => {
        const wrapper = shallow(<Input meta={meta} label={"Address"} input={{ name: "name" }} />);
        expect(wrapper.hasClass('form-input')).toEqual(true);
    });

})
