import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import ChallengeHistory from '@root/pages/challenge/history';
import { defaultTheme } from '@root/themes/default-theme';

describe('Test Challenge History page', () => {
	it('renders children text', () => {
		const wrapper = mount(
			<ThemeProvider theme={defaultTheme}>
				<ChallengeHistory />
			</ThemeProvider>,
		);
		expect(wrapper.find('h1').text()).toEqual('Challenge History');
	});
});
