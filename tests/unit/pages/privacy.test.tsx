import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Privacy from '@root/pages/privacy';
import { defaultTheme } from '@root/themes/default-theme';

describe('Test Privacy page', () => {
	it('renders children text', () => {
		const wrapper = mount(
			<ThemeProvider theme={defaultTheme}>
				<Privacy />
			</ThemeProvider>,
		);
		expect(wrapper.find('h1').text()).toEqual('PrivacyPolicy');
	});
});
