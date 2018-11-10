import React from 'react';
import { shallow } from 'enzyme';
import Property from './Property';

describe('<Property />', () => {


    it('renders without crashing', () => {
        const data = {}
        shallow(<Property data={data} />)
    });


})
