import React from 'react';
import { shallow } from 'enzyme';

import ChallengeRoom from '@root/pages/challenge/[id]';

describe('Test Challenge Room page', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<ChallengeRoom />);
		expect(wrapper).toBeDefined();
	});
});
