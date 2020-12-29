import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import ChallengeRoom from '@root/pages/challenge/[id]';
import { defaultTheme } from '@root/themes/default-theme';

describe('Test Challenge Room page', () => {
	it('renders children text', () => {
		const wrapper = mount(
			<ThemeProvider theme={defaultTheme}>
				<ChallengeRoom />
			</ThemeProvider>,
		);
		expect(wrapper.find('h1').text()).toEqual('Challenge Room');
	});
});
