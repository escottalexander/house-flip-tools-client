import React from 'react';
import store from 'redux';
import { shallow, mount } from 'enzyme';
import { Dashboard } from './Dashboard';

describe('<Dashboard />', () => {

    it('renders without crashing', () => {
        shallow(<Dashboard properties={[]} getUserProperties={() => 'any value'} dispatch={() => 'any value'} />)
    });
})
