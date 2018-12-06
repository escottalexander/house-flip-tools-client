import React from 'react';
import { shallow, mount } from 'enzyme';
import { AddImprovement } from './AddImprovement';
import { Provider } from 'react-redux';
import store from '../store';



describe('<AddImprovement />', () => {

    const mockFunction = jest.fn();
    it('Renders without crashing', () => {
        shallow(<AddImprovement handleSubmit={mockFunction} dispatch={mockFunction} />)
    });

    it('Renders correct fields', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <AddImprovement handleSubmit={mockFunction} dispatch={mockFunction} />
            </Provider>
        ).dive()

        expect(wrapper.find('Field')).toHaveLength(2)
        expect(wrapper.find({ name: "name" })).toHaveLength(1)
        expect(wrapper.find({ name: "cost" })).toHaveLength(1)
    });


})
