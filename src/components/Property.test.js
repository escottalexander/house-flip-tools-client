import React from 'react';
import { shallow } from 'enzyme';
import Property from './Property';

describe('<Property />', () => {
    const data = {
        address: "123 Chestnut Tree Rd",
        slug: "123-chestnut-tree-rd"
    }

    it('Renders without crashing', () => {
        shallow(<Property data={data} />)
    });

    it('Renders correct property information', () => {
        const wrapper = shallow(<Property data={data} />)
        expect(wrapper.find('.address').text()).toEqual(data.address)
        expect(wrapper.find('Link').props('to').to).toEqual(`/dashboard/${data.slug}`)
    });

})
