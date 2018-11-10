import React from 'react';
import { shallow } from 'enzyme';
import { EditProperty } from './EditProperty';

describe('<EditProperty />', () => {


    it('renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<EditProperty handleSubmit={dispatch} loadData={dispatch} dispatch={dispatch} />)
    });


})
