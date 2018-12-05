import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Improvement } from './Improvement';

describe('<Improvement />', () => {
    const data = {
        id: "12",
        name: 'new roof',
        cost: 3000

    }

    it('renders without crashing', () => {
        shallow(<Improvement data={data} prettify={() => '3,000'} />)
    });

    it('Should fire the deleteImprovement callback when the delete button is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<Router><Improvement improvement={data} slug={'slug'} data={data} deleteImprovement={callback} prettify={() => '3,000'} dispatch={(func) => func} /></Router>);
        wrapper.find('.deleteImprovement').simulate('click')
        expect(callback).toHaveBeenCalled();
    });

    it('Should contain Link to /dashboard/:slug/improvement/:id', () => {
        const wrapper = mount(<Router><Improvement improvement={data} slug={'slug'} data={data} prettify={() => '3,000'} dispatch={(func) => func} /></Router>);
        expect(wrapper.find('Link').prop('to')).toEqual('/dashboard/slug/improvement/12')
    });
})
