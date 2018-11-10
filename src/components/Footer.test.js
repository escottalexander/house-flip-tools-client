import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('<Footer />', () => {


    it('renders without crashing', () => {
        shallow(<Footer slugify={() => "nothing"} />)
    });


})
