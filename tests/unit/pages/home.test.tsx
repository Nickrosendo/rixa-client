import React from 'react';
import { shallow } from 'enzyme';

import Home from '@root/pages/home';

describe('Test Home page', () => {
	it('renders children text', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper).toBeDefined();
	});
});
