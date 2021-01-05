import React from 'react';
import { shallow } from 'enzyme';

import Terms from '@root/pages/terms';

describe('Test Terms page', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Terms />);
		expect(wrapper).toBeDefined();
	});
});
