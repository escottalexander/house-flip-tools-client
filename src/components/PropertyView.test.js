import React from 'react';
import { shallow } from 'enzyme';
import { PropertyView } from './PropertyView';

describe('<PropertyView />', () => {
    const data = {
        propertyId: 10014,
        address: "123 Chestnut Tree Rd",
        slug: "123-chestnut-tree-rd",
        improvements: []
    };

    it('renders without crashing', () => {
        shallow(<PropertyView property={data} prettify={() => 'any value'} getUserProperties={() => 'any value'} dispatch={() => 'any value'} />)
    });

    it('Renders correct property information', () => {
        const wrapper = shallow(<PropertyView property={data} prettify={() => 'any value'} getUserProperties={() => 'any value'} dispatch={() => 'any value'} />)
        expect(wrapper.find('h2').text()).toEqual(data.address)
    });

})
