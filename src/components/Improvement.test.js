import React from 'react';
import { shallow } from 'enzyme';
import { Improvement } from './Improvement';

describe('<Improvement />', () => {


    it('renders without crashing', () => {
        const data = { name: 'Santa' }
        shallow(<Improvement data={data} prettify={() => 'returned value'} />)
    });


})
