import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../store';
import Main from './Main';
import LandingPage from './LandingPage';

describe('<Main />', () => {


  it('renders without crashing', () => {
    shallow(<Main />)
  });

  it('/ path should redirect to LandingPage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(LandingPage)).toHaveLength(1);
  });

})

