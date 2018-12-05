import React from 'react';
import { shallow } from 'enzyme';
import FileInput from './FileInput';

describe('<FileInput />', () => {

    const meta = {
        touched: "",
        error: "",
        warning: ""
    }
    it('renders without crashing', () => {
        shallow(<FileInput meta={meta} label={"files"} input={{ name: "name" }} />)
    });

    it('renders input element with proper class', () => {
        const wrapper = shallow(<FileInput meta={meta} label={"files"} input={{ name: "name" }} />);
        expect(wrapper.hasClass('form-input')).toEqual(true);
    });

})
