import React from 'react';
import { shallow, mount } from 'enzyme';
import { EditImprovement } from './EditImprovement';
import { Provider } from 'react-redux';
import store from '../store';


describe('<EditImprovement />', () => {
    const improvements = []
    const mockFunction = jest.fn();
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <EditImprovement improvements={improvements} />
            </Provider>)
    });

    it('Renders correct fields', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <EditImprovement handleSubmit={mockFunction} loadData={mockFunction} dispatch={mockFunction} />
            </Provider>
        ).dive()

        expect(wrapper.find('Field')).toHaveLength(2)
        expect(wrapper.find({ name: "name" })).toHaveLength(1)
        expect(wrapper.find({ name: "cost" })).toHaveLength(1)
    });

})
