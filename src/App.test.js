import React from 'react';
import { mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  var wrapper = mount(<App />);
  expect(wrapper.find(".app")).toHaveText("This is the base file for the app");
});
