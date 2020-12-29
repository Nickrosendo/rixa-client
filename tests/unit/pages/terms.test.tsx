import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Terms from '@root/pages/terms';
import { defaultTheme } from '@root/themes/default-theme';

describe('Test Terms page', () => {
	it('renders children text', () => {
		const wrapper = mount(
			<ThemeProvider theme={defaultTheme}>
				<Terms />
			</ThemeProvider>,
		);
		expect(wrapper.find('h1').text()).toEqual('Terms of use');
	});
});
