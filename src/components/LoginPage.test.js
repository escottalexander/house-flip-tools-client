import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from './LoginPage';

describe('<LoginPage />', () => {


    it('renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<LoginPage handleSubmit={dispatch} />)
    });


})
