import React from 'react';
import { shallow } from 'enzyme';
import { RegisterModal } from './RegisterModal';
import { Provider } from 'react-redux';
import store from '../store';

describe('<RegisterModal />', () => {
    const mockFunction = jest.fn();

    it('renders without crashing', () => {

        shallow(<RegisterModal handleSubmit={mockFunction} />)
    });

    it('Renders correct fields', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <RegisterModal handleSubmit={mockFunction} />
            </Provider>
        ).dive()

        expect(wrapper.find('Field')).toHaveLength(4)
        expect(wrapper.find({ name: "username" })).toHaveLength(1)
        expect(wrapper.find({ name: "email" })).toHaveLength(1)
        expect(wrapper.find({ name: "password" })).toHaveLength(1)
        expect(wrapper.find({ name: "password-again" })).toHaveLength(1)
    });

})
