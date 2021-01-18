import React from 'react';
import { shallow } from 'enzyme';

import Security from '@root/pages/security';

describe('Test Security page', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Security />);
		expect(wrapper).toBeDefined();
	});
});
