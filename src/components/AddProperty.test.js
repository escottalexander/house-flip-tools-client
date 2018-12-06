import React from 'react';
import { shallow, mount } from 'enzyme';
import { AddProperty } from './AddProperty';
import { Provider } from 'react-redux';
import store from '../store';

describe('<AddProperty />', () => {
    const mockFunction = jest.fn();

    it('renders without crashing', () => {
        shallow(<AddProperty handleSubmit={mockFunction} dispatch={mockFunction} />)
    });

    it('Renders correct fields', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <AddProperty handleSubmit={mockFunction} dispatch={mockFunction} />
            </Provider>
        ).dive()

        expect(wrapper.find('Field')).toHaveLength(17)
        expect(wrapper.find({ name: "address" })).toHaveLength(1)
        expect(wrapper.find({ name: "city" })).toHaveLength(1)
        expect(wrapper.find({ name: "state" })).toHaveLength(1)
        expect(wrapper.find({ name: "zip" })).toHaveLength(1)
        expect(wrapper.find({ name: "imgSrc" })).toHaveLength(1)
        expect(wrapper.find({ name: "description" })).toHaveLength(1)
        expect(wrapper.find({ name: "floorSize" })).toHaveLength(1)
        expect(wrapper.find({ name: "yearBuilt" })).toHaveLength(1)
        expect(wrapper.find({ name: "lotSize" })).toHaveLength(1)
        expect(wrapper.find({ name: "price" })).toHaveLength(1)
        expect(wrapper.find({ name: "stories" })).toHaveLength(1)
        expect(wrapper.find({ name: "bedrooms" })).toHaveLength(1)
        expect(wrapper.find({ name: "bathrooms" })).toHaveLength(1)
        expect(wrapper.find({ name: "basement" })).toHaveLength(1)
        expect(wrapper.find({ name: "roofType" })).toHaveLength(1)
        expect(wrapper.find({ name: "foundationType" })).toHaveLength(1)
        expect(wrapper.find({ name: "notes" })).toHaveLength(1)

    });

})
