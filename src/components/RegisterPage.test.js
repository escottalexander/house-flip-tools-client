import React from 'react';
import { shallow } from 'enzyme';
import { RegisterPage } from './RegisterPage';

describe('<RegisterPage />', () => {


    it('renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<RegisterPage handleSubmit={dispatch} />)
    });


})
