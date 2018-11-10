import React from 'react';
import { shallow } from 'enzyme';
import { AddImprovement } from './AddImprovement';

describe('<AddImprovement />', () => {


    it('renders without crashing', () => {
        shallow(<AddImprovement />)
    });


})
