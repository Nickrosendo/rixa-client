import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../../src/pages';

describe('Test Home page', () => {
	it('renders children text', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper.find('h1').text()).toEqual('Hello World');
	});
});
