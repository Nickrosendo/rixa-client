import React from 'react';
import { shallow } from 'enzyme';

import Privacy from '@root/pages/privacy';

describe('Test Privacy page', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Privacy />);
		expect(wrapper).toBeDefined();
	});
});
