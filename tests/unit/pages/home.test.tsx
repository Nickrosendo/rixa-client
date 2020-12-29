import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Home from '@root/pages/home';
import { defaultTheme } from '@root/themes/default-theme';

describe('Test Home page', () => {
	it('renders children text', () => {
		const wrapper = mount(
			<ThemeProvider theme={defaultTheme}>
				<Home />
			</ThemeProvider>,
		);
		expect(wrapper.find('h1').text()).toEqual('Hello World');
	});
});
