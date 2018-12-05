import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from './LoginPage';
import { Provider } from 'react-redux';
import store from '../store';

describe('<LoginPage />', () => {
    const mockFunction = jest.fn();

    it('renders without crashing', () => {
        shallow(<LoginPage handleSubmit={mockFunction} />)
    });

    it('Renders correct fields', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <LoginPage handleSubmit={mockFunction} />
            </Provider>
        ).dive()

        expect(wrapper.find('Field')).toHaveLength(2)
        expect(wrapper.find({ name: "username" })).toHaveLength(1)
        expect(wrapper.find({ name: "password" })).toHaveLength(1)
    });

})
