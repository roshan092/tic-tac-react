import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

it('renders without crashing', () => {
    var wrapper = shallow(<Login />);
    expect(wrapper.find(".header"))
        .toHaveText("This is the login component");
});