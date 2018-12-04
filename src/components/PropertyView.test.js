import React from 'react';
import { shallow } from 'enzyme';
import { PropertyView } from './PropertyView';

describe('<PropertyView />', () => {


    it('renders without crashing', () => {
        const data = { improvements: [] };
        shallow(<PropertyView property={data} prettify={() => 'any value'} getUserProperties={() => 'any value'} dispatch={() => 'any value'} />)
    });


})
