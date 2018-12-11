import React from 'react';
import { shallow } from 'enzyme';
import { LoginModal } from './LoginModal';
import { Provider } from 'react-redux';
import store from '../store';

describe('<LoginModal />', () => {
    const mockFunction = jest.fn();

    it('renders without crashing', () => {
        shallow(<LoginModal handleSubmit={mockFunction} />)
    });

    it('Renders correct fields', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <LoginModal handleSubmit={mockFunction} />
            </Provider>
        ).dive()

        expect(wrapper.find('Field')).toHaveLength(2)
        expect(wrapper.find({ name: "username" })).toHaveLength(1)
        expect(wrapper.find({ name: "password" })).toHaveLength(1)
    });

})
