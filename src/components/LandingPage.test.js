import React from 'react';
import { shallow, mount } from 'enzyme';
import { LandingPage } from './LandingPage';


describe('<LandingPage />', () => {


    it('renders without crashing', () => {
        shallow(<LandingPage />)
    });

    it('Redirects to /dashboard if exampleReady prop is true', () => {
        const wrapper = shallow(<LandingPage exampleReady={true} />)
        expect(wrapper.find('Redirect').props('to').to).toContain('/dashboard')
    });

    it('Renders landing page when exampleReady prop is false', () => {
        const wrapper = shallow(<LandingPage exampleReady={false} />)
        expect(wrapper.hasClass('LandingPage')).toEqual(true);
    });

    it('Should fire the callback when the example account button is clicked', () => {
        const callback = new Promise((resolve, reject) => {
            resolve(jest.fn());
            reject(jest.fn())
        });
        const wrapper = mount(
            <LandingPage
                dispatch={() => callback}
                login={() => "executed"}
                user={'user'}
                getUserProperties={callback}
                deleteProperty={callback}
                addProperty={callback}
                exampleAccountInitialized={callback}
                exampleAccountUninitialized={callback}
            />);
        wrapper.find('button').simulate('click')
        expect(wrapper.instance().props.login()).toEqual("executed");
    });

})
