import React from 'react';
import { shallow } from 'enzyme';

import Balance from '@root/pages/balance';

describe('Test Balance page', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Balance />);
		expect(wrapper).toBeDefined();
	});
});
