import React from 'react';
import { mount } from 'enzyme';

import Home from '@root/pages/home';

describe('Test Home page', () => {
	it('renders children text', () => {
		const wrapper = mount(<Home />);
		expect(wrapper.find('h1').text()).toEqual('Hello World');
	});
});
